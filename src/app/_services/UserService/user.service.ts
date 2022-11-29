
import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { agence, AppUser } from '../../Models/AppUser';
import { StorageSService } from '../storageService/storage-s.service';
import { Role } from 'app/Models/Role';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_API='http://localhost:8085/api/';


 
  constructor(private httpClient: HttpClient,private storageSer:StorageSService) { }

  
  httpOptions:any = {
    headers: new Headers({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer "+ this.storageSer.getToken(),

     })
  };
//get users methode 

  public getAllUsers():Observable<HttpEvent<AppUser[]>>
  {    return this.httpClient.get<AppUser[]>(this.PATH_API+"user",this.httpOptions);
  }

  
  public getUser(id:number):Observable<HttpEvent<AppUser[]>>
  {    return this.httpClient.get<AppUser[]>(this.PATH_API+`/user${id}`,this.httpOptions);
  }

  public AddUsers( appUser) {
    return this.httpClient.post(this.PATH_API+"users/save",appUser,this.httpOptions);
  }

  public UpdateUsers(id:number,formData){
return this.httpClient.put(this.PATH_API+`user/update/${id}`,formData,this.httpOptions);
    
  }

  public DeleteUser(user:AppUser){
return this.httpClient.delete(this.PATH_API+`user/delete/${user.id}`, this.httpOptions)
  }



  //get roles methode 
  public getAllRoles():Observable<HttpEvent<Role[]>> {
    return this.httpClient.get<Role[]>(this.PATH_API+"roles",this.httpOptions);
  }

    public getRole(id:number):Observable<HttpEvent<Role>> {
    return this.httpClient.get<Role>(this.PATH_API+`role/${id}`,this.httpOptions);
  }

  public UpdateRole(url:any) {
    return this.httpClient.get(this.PATH_API+"roles",this.httpOptions);
  }
  public DeleteRole(url:any) {
    return this.httpClient.get(this.PATH_API+"roles",this.httpOptions);
  }

  //get Agence methode 
  public getAllAgence():Observable<HttpEvent<agence[]>> {
    return this.httpClient.get<agence[]>(this.PATH_API+"Agences",this.httpOptions);
  }

    public getAgence(id:number):Observable<HttpEvent<agence>> {
    return this.httpClient.get<agence>(this.PATH_API+`agence/${id}`,this.httpOptions);
  }

  public UpdateAgence(url:any) {
    return this.httpClient.get(this.PATH_API+"agence",this.httpOptions);
  }
  public DeleteAgence(url:any) {
    return this.httpClient.get(this.PATH_API+"agence",this.httpOptions);
  }


  
  

  // add  methode  of Permissions
  public getAllPermissions(url:any) {
    return this.httpClient.get(this.PATH_API+"Permissions",this.httpOptions);
  }

    public getPermission(url:any) {
    return this.httpClient.get(this.PATH_API+"Permissions",this.httpOptions);
  }

  public UpdatePermission(url:any) {
    return this.httpClient.get(this.PATH_API+"Permissions",this.httpOptions);
  }
  public DeletePermission(url:any) {
    return this.httpClient.get(this.PATH_API+"Permissions",this.httpOptions);
  }



  //add Ressource and privilege methode 

  public getAllprivileges(url:any) {
    return this.httpClient.get(this.PATH_API+"privileges",this.httpOptions);
  }

    public getprivilege(url:any) {
    return this.httpClient.get(this.PATH_API+"privileges",this.httpOptions);
  }


  public getAllRessources(url:any) {
    return this.httpClient.get(this.PATH_API+"Ressources",this.httpOptions);
  }

    public getRessource(url:any) {
    return this.httpClient.get(this.PATH_API+"Ressources",this.httpOptions);
  }


//AddPermissionsTorole Methode


  
public AddPermissionToRole(url:any) {
  return this.httpClient.get(this.PATH_API+"Ressources",this.httpOptions);
}


}
