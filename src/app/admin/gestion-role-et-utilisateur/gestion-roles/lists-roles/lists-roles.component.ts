import { Role } from './../../../../Models/Role';
import { Observable, map, startWith, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { UserService } from 'app/_services/UserService/user.service';
import { AppDataState, DataStateEnum } from 'app/_States/appState';

@Component({
  selector: 'app-lists-roles',
  templateUrl: './lists-roles.component.html',
  styleUrls: ['./lists-roles.component.css']
})
export class ListsRolesComponent implements OnInit {

  readonly DataStateEnum = DataStateEnum;
  
 public roles$?: Observable<AppDataState<Role[]>> | null=null;
  protected updateUserModal:Element|null

  constructor(private route: Router, private storage: StorageSService, private userService: UserService ) { }

  ngOnInit(): void {

    this.getAllRoles();
  }

  getAllRoles() {
    this.roles$=
    this.userService.getAllRoles().pipe(
      map(
        data=>{
          console.log(data);
       return ({dataState:DataStateEnum.LOADED,data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
}

}
