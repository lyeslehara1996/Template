import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: 'List Des Utilisateurs',
      
      path: 'ListeUtilisateurs',
     
    },
    {
      menuItem: 'Ajouter Des Utilisateurs',
      path: 'AjouterDesUtilisateurs',
      
    },
    {
      menuItem: "Affecter  roles a l'utilisateur ",
      path: 'AffecterRoleUtilisateur/:id',

    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
