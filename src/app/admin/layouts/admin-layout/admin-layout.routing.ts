import { AddPermissionToRoleComponent } from './../../gestion-role-et-utilisateur/gestion-roles/add-permission-to-role/add-permission-to-role.component';
import { AddPermissionComponent } from './../../gestion-role-et-utilisateur/gestion-roles/add-permission/add-permission.component';
import { ListpermissionComponent } from './../../gestion-role-et-utilisateur/gestion-roles/listpermission/listpermission.component';
import { ActionJusticeComponent } from './../../risque-credit/analyse-portfeuille/action-justice/action-justice.component';
import { Routes } from "@angular/router";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { DashboardComponent } from "app/admin/dashboard/dashboard.component";
import { AuthPermissionsGuard } from "app/_Guards/auth-permissions.guard";
import { AnalysePortfeuilleComponent } from "app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille.component";
import { GestionDesResqueClientComponent } from "app/admin/risque-credit/gestion-des-resque-client/gestion-des-resque-client.component";
import { KRIsComponent } from "app/admin/risque-credit/kris/kris.component";
import { StressTestComponent } from "app/admin/risque-credit/stress-test/stress-test.component";
import { Top10Component } from "app/admin/risque-credit/top10/top10.component";
import { AnalysePortfeuilleDirectComponent } from "app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-direct/analyse-portfeuille-direct.component";
import { DurationComponent } from "app/admin/risque-credit/analyse-portfeuille/durations/duration.component";
import { CreationDouteuseComponent } from "app/admin/risque-credit/analyse-portfeuille/creation-douteuse/creation-douteuse.component";
import { ActionDeRecouvermentComponent } from "app/admin/risque-credit/analyse-portfeuille/action-de-recouverment/action-de-recouverment.component";

import { HasRoleGuard } from "app/_Guards/has-role.guard";
import { GestionUtilisateurComponent } from "app/admin/gestion-Role-Et-Utilisateur/gestion-utilisateur/gestion-utilisateur.component";
import { GestionRolesComponent } from "app/admin/gestion-Role-Et-Utilisateur/gestion-roles/gestion-roles.component";
import { GestionPermissionsComponent } from "app/admin/gestion-Role-Et-Utilisateur/gestion-permissions/gestion-permissions.component";
import { AnalysePortfeuilleInDirectComponent } from "app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/analyse-portfeuille-in-direct.component";
import { ListeUtilisateursComponent } from "app/admin/Gestion-role-et-utilisateur/gestion-utilisateur/liste-utilisateurs/liste-utilisateurs.component";
import { AjouterDesUtilisateusComponent } from "app/admin/Gestion-role-et-utilisateur/gestion-utilisateur/ajouter-des-utilisateus/ajouter-des-utilisateus.component";
import { PortefeuilDirectComponent } from "app/admin/risque-credit/analyse-portfeuille/portefeuil-direct/portefeuil-direct.component";
import { PortefeuilIndirectComponent } from "app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/portefeuil-indirect.component";
import { ListsRolesComponent } from "app/admin/gestion-role-et-utilisateur/gestion-roles/lists-roles/lists-roles.component";
import { AjouterDesRolesComponent } from "app/admin/gestion-role-et-utilisateur/gestion-roles/ajouter-des-roles/ajouter-des-roles.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
    ],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "",
    children: [
      {
        path: "GestionUtilisateur",
        component: GestionUtilisateurComponent,
        children: [
          {
            path: "ListeUtilisateurs",
            component: ListeUtilisateursComponent,
           
          },
          {
            path: "AjouterDesUtilisateurs",
            component: AjouterDesUtilisateusComponent,
          },
        
        ],
      },
      {
        path: "GestionDesRoles",
        component: GestionRolesComponent,
        children: [
          {
            path: "ListesRoles",
            component: ListsRolesComponent,
           
          },
          {
            path: "AjouterRole",
            component: AjouterDesRolesComponent,
          },
  
          {
            path: "ListPermissions",
            component: ListpermissionComponent,
          },
          {
            path: "ajouterDesPermissions",
            component: AddPermissionComponent,
          },
          {
            path: "AjouterPermissionRole",
            component: AddPermissionToRoleComponent,
          },
        
        ],
      },
      {
        path: "GestionDesPermission",
        component: GestionPermissionsComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "AnalysePortfeuille",
        component: AnalysePortfeuilleComponent,
      
        children: [
          {
            path: "GraphePortfeuilledirect",
            component: PortefeuilDirectComponent,
          },

          {
            path: "GraphePortfeuilleindirect",
            component: PortefeuilIndirectComponent,
          },
          {
            path: "Portfeuilledirect",
            component: AnalysePortfeuilleDirectComponent,
            canActivate : [AuthPermissionsGuard],  // to add permissions at route 
            data :{
              requiredPermission:['ConsulterUser']
        },
          },
          
          {
            path: "AnalysePortfeuilleInDirect",
            component: AnalysePortfeuilleInDirectComponent,
          },
          {
            path: "Duration",
            component: DurationComponent,
          },
          {
            path: "CreationDuteuse",
            component: CreationDouteuseComponent,
          },
          {
            path: "ActionDeRecouverment",
            component: ActionDeRecouvermentComponent,
          },
          {
            path: "ActionDeJustices",
            component: ActionJusticeComponent,
          },
        ],
      },
      {
        path: "RisqueClient",
        component: GestionDesResqueClientComponent,
      },
      {
        path: "KRIs",
        component: KRIsComponent,
      },
      {
        path: "StressTest",
        component: StressTestComponent,
      },
      {
        path: "Top10",
        component: Top10Component,
      },
    ],
  },
  //   {
  //     path: '',
  //     canActivate : [AuthPermissionsGuard],
  //     data :{
  //    expectedPermission:['ConsulterRessources']
  //  },
  //     children: [
  //       {
  //       path: 'AnalyseDesDepots',
  //       // component:
  //     },
  //     {
  //       path: 'AnalyseQualitativeETQuantitative',
  //       // component:
  //     },
  //     {
  //       path: 'KRIs',
  //       // component: ,
  //     },
  //     {
  //       path: 'StressTest',
  //       // component:
  //     },
  //     {
  //       path: 'SurveillanceDeLaTreoserie',
  //       // component:
  //     },
  //   ]
  //     },
  //   {
  //     path: '',
  //     canActivate : [AuthPermissionsGuard],
  //     data :{
  //    expectedPermission:['ConsulterRessources']
  //  },
  //     children: [
  //       {
  //       path: 'EvaluationDesTAuxDeCharges',
  //       // component:
  //     },
  //     {
  //       path: 'SurveillanceDesSessionsDevise',
  //       // component:
  //     },
  //     {
  //       path: 'KRIs',
  //       // component: ,
  //     },
  //     {
  //       path: 'StressTest',
  //       // component:
  //     },

  //   ]
  //     },

  // { path: '',       component: DashboardComponent ,canActivate : [AuthPermissionsGuard],
  //  data :{
  //    expectedPermission:['ConsulterRessources']
  // } },
  // { path: 'Dashboard',      component: DashboardComponent },
  // { path: 'user-profile',   component:UserProfileComponent },
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },

  // { path: 'RisqueCredit',  children: [
  //      {
  //           path: 'upgrade',
  //           component: RisqueCreditComponent
  //       }

  //     ]

  //     },
  // { path: 'risqueMarche', component: RisqueDeMarcheComponent  },
  // { path: 'risqueLiqudite', component: RisqueLiquiditeComponent  },

  // { path: 'icons',          component: IconsComponent  },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
];
