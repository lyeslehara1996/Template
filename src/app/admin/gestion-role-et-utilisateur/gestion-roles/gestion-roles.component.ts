import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})
export class GestionRolesComponent implements OnInit {

  protected menuItems = [
    {
      menuItem: 'Lists Des Roles',
      path: 'ListesRoles',
     
    },
    {
      menuItem: 'Ajouter Un Role',
      path: 'AjouterRole',
      
    },
    
    
    {
      menuItem: "Liste Des Permissions",
      path: 'ListPermissions',
      
    },
    {
      menuItem: "Ajouter des Permissions",
      path: 'ajouterDesPermissions',
      
    },
    {
      menuItem: 'Ajouter Une Permission a un Role',
      path: 'AjouterPermissionRole',
      
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
