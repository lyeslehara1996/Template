import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'app/_services/ForgotPasswordService/forgot-password.service';


@Component({
  selector: 'app-confirmation-password',
  templateUrl: './confirmation-password.component.html',
  styleUrls: ['./confirmation-password.component.css']
})
export class ConfirmationPasswordComponent implements OnInit {
  errorMessage !:string[];
  submitted:boolean = false;
  constructor(private forgotPasswordService:ForgotPasswordService,private route: Router ) { }
  public ResetPasswordForm?: FormGroup | null= null;
  ngOnInit(): void {

    // this.ResetPasswordForm = new FormGroup({
    //   password: new FormControl('', [
    //     Validators.required,
    //   ]),
    //   confirmpassword: new FormControl('', [
    //     Validators.required,
    //   ]),
    // });




    const togglePassword = document.querySelector("#visibilityPassword");
    const toggleConfirmPassword = document.querySelector("#visibilityConfirmPassword");

    const password = document.querySelector("#password");
    const Confirmpassword = document.querySelector("#Confirmpassword");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        
        // toggle the icon
      
    });
    toggleConfirmPassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = Confirmpassword.getAttribute("type") === "password" ? "text" : "password";
        Confirmpassword.setAttribute("type", type);
        
        // toggle the icon
       
    });
  }

}
