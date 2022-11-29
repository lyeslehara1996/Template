import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AdminLayoutRoutes } from 'app/admin/layouts/admin-layout/admin-layout.routing';
import { User } from 'app/Models/User.model';
import { StorageSService } from 'app/_services/storageService/storage-s.service';

@Component({
  selector: 'app-navigation-role',
  templateUrl: './navigation-role.component.html',
  styleUrls: ['./navigation-role.component.css']
})
export class NavigationRoleComponent implements OnInit {
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
      menuItem: "Affecter  roles a l'utilisateur ",
      path: 'AffecterRoleUtilisateur',

    },
    {
      menuItem: "Liste Des Permissions",
      path: 'ListPermissions',

    },
    {
      menuItem: "Ajouter des Permissions",
      path: 'ajouterDesPermissions',

    },
  ]

  constructor(private storage:StorageSService) { }

  ngOnInit(): void {
    console.log(this.getItems())
  }

  getItems() {
   let user = (new User(this.storage.getUser()))
   let routes = [...AdminLayoutRoutes]
   let flattenedRoutes = this.getFlattenedRoutesArray(routes)
   let items = this.menuItems.filter(item => {
    return flattenedRoutes.find(route => {
      if (route.path === item. path) {
        let routePermission = route?.data?.requiredPermission
        if (routePermission && !user.hasPermission(routePermission)) {
          return false;
        }
        return true;
      }
      return false;
    }) ? true : false
   })
   return items
   
  }

  getFlattenedRoutesArray(routes:Route[]) {
    let newRoutes = []
    routes.forEach(route => {
      if (route.children) {
        newRoutes = [...newRoutes, ...this.getFlattenedRoutesArray(route.children)] 
      } else {
        newRoutes.push(route)
      }
    })
    return newRoutes
  }
}