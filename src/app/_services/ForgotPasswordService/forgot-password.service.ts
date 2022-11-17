import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgotPassword } from 'app/Models/ForgotPassword';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private httpClient: HttpClient) { }
  PATH_API='http://localhost:8085/Auth/';



  public ForgotPassword(email:string):Observable <ForgotPassword> 
  {    return this.httpClient.post <ForgotPassword> (this.PATH_API+"ForgotPassword",email);
  }

  // public ResetPasswordtoken(token:string,password:string,confirmationPassword:string)
  // {    return this.httpClient.post (this.PATH_API+`/ResetPAssword${token}`,{password,confirmationPassword});
  // }


}
