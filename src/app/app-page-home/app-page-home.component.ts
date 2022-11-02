import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'app/_services/AuthService/auth-service.service';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-page-home',
  templateUrl: './app-page-home.component.html',
  styleUrls: ['./app-page-home.component.css']
})
export class AppPageHomeComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage ?:string[];
  roles: string[] = [];
  submitted:boolean = false;
  constructor(private authService:AuthServiceService,private storageSService:StorageSService ,private router:Router) { }
  public LoginForm!: FormGroup;
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      password: new FormControl('', [Validators.required]),
    });

    if (this.storageSService.getToken() && this.storageSService.isLoggedIn() === true) {
     console.log(this.storageSService.getUser().privileges)
      this.isLoggedIn === true;
      this.isLoginFailed === false;
      this.roles = this.storageSService.getUser().roles;
      this.router.navigateByUrl('/Admin');
    }else{
      this.storageSService.signOut();
      this.router.navigate(['/Home']);
      this.isLoggedIn===false
      this.isLoginFailed===true
   
    }
  }

    
  public hasError = (controlName: string, errorName: string) => {
    return this.LoginForm.controls[controlName].hasError(errorName);
  };


  
  onSubmit() {

this.submitted= true;
    
    this.authService.Login(this.LoginForm.value).subscribe(
      (Response:any)=>{
   
        this.storageSService.saveToken(Response.jwtAccessTocken);
        this.storageSService.saveUser(Response);
        console.log(this.storageSService.getUser())
        this.isLoginFailed ===false;
        this.isLoggedIn === true;
 
    
       
        if(this.storageSService.getToken() && this.storageSService.isLoggedIn() === true ){
          this.router.navigateByUrl('/Admin')
  
          
        }
      
      },
      (error)=>{

        this.isLoginFailed === true;
        this.isLoggedIn === false;
      
      }
    )
  }
 
  reloadPage(): void {
    window.location.reload();
  }

}
