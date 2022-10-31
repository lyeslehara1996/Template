import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable, of } from 'rxjs';
import { StorageSService } from '../storageService/storage-s.service';
import { UserService } from '../UserService/user.service';


  
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization':"Bearer "+ sessionStorage.getItem('accessstoken'),

   })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {



  private AUTH_API = 'http://localhost:8085/Auth/signin';


  constructor(private router:Router, private storageservice:StorageSService  , private http: HttpClient,private userservice:UserService) {  }

 
  public Login(Data:any) {
    return this.http.post(this.AUTH_API,Data);
  }
  
}


