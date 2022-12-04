import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/_services/UserService/user.service';
import { AppDataState, DataStateEnum } from 'app/_States/appState';
import { Permission } from 'app/Models/Permission';
import { Niveau } from 'app/Models/Niveau';

@Component({
  selector: 'app-ajouter-des-roles',
  templateUrl: './ajouter-des-roles.component.html',
  styleUrls: ['./ajouter-des-roles.component.css']
})
export class AjouterDesRolesComponent implements OnInit {

  constructor(private userService:UserService,private formBuilder:FormBuilder,private route:Router) { }
  public AddRoleForm!: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public permissions$?: Observable<AppDataState <Permission[]>> | null=null;
  public niveaux$ ?: Observable<AppDataState<Niveau[]>> | null=null;
  submitted:boolean = false;
  ngOnInit(): void {

    this.AddRoleForm = this.formBuilder.group({
      roleName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      permissions: new FormControl('', [
        Validators.required,
      ]),
      niveau: new FormControl('', [
        Validators.required,
      ]),

    });

  }

  getAllPermission(){

  }

  getAllNiveaux(){
    
  }



  onSubmit(){

  }



  public hasError = (controlName: string, errorName: string) => {
    return this.AddRoleForm.controls[controlName].hasError(errorName);
  };
}
