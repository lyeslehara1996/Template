import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'app/_services/AuthService/auth-service.service';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { Router } from '@angular/router';
import{ Observable } from 'rxjs';


import { AppUser } from '../Models/AppUser'
import { AppState, selectAuthState } from '../_State/app.state';
import {LogIn  } from '../_State/Action/auth.actions';
import { State, Store } from '@ngrx/store';

declare var $: any;
@Component({
  selector: 'app-app-page-home',
  templateUrl: './app-page-home.component.html',
  styleUrls: ['./app-page-home.component.css']
})
export class AppPageHomeComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage !:string[];
  roles: string[] = [];
  submitted:boolean = false;
  errorMessages ?:string;

  user: AppUser ;
  getState: Observable<any>;



  constructor(private authService:AuthServiceService,private storageSService:StorageSService ,private router:Router, private store: Store <AppState>) {   this.getState = this.store.select(selectAuthState);}
   
  public LoginForm!: FormGroup;
  form : any
  align :any;
  ngOnInit(): void {
    this.store.subscribe(state => {
    
    });

    this.LoginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      password: new FormControl('', [Validators.required]),
    });

    if (this.storageSService.getToken() && this.storageSService.isLoggedIn() === true) {
     console.log(this.storageSService.getUser().permissions)
      this.isLoggedIn === true;
      this.isLoginFailed === false;
      this.roles = this.storageSService.getUser().roles;
      this.router.navigateByUrl('/Admin');
      this.reloadPage()
    }else{
      this.storageSService.signOut();
      this.router.navigate(['/Home']);
      this.isLoggedIn===false
      this.isLoginFailed===true
      
   
    }

  
  }

    
 

  
//   onSubmit() {

// this.submitted= true;
    
//     this.authService.Login(this.LoginForm.value['username'],this.LoginForm.value['password']).subscribe(
//       (Response:any)=>{
   
//         this.storageSService.saveToken(Response.jwtAccessTocken);
//         this.storageSService.saveUser(Response);
//         console.log(this.storageSService.getUser())
//         this.isLoginFailed ===false;
//         this.isLoggedIn === true;
//         if(this.storageSService.getToken() && this.storageSService.isLoggedIn() === true ){
//           this.router.navigateByUrl('/Admin')
  
          
//         }

//       },
//       (error)=>{
     
//        this.errorMessage = error.error
//       console.log(this.errorMessage)
//         this.isLoginFailed === true;
//         this.isLoggedIn === false;
      

      
//       }
//     )
//   }


onSubmit(){
  this.submitted= true;

  const payloads = {
    username: this.LoginForm.value['username'],
    password: this.LoginForm.value['password']
  };
  console.log()
 this.authService.Login(this.LoginForm.value['username'],this.LoginForm.value['password']).subscribe(
  ()=>{
    this.store.dispatch(new LogIn(payloads));

  }
 )


}
 

  reloadPage(): void {
    window.location.reload();
  }



  public hasError = (controlName: string, errorName: string) => {
    return this.LoginForm.controls[controlName].hasError(errorName);
  };

}
