import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppPageHomeComponent } from './app-page-home/app-page-home.component';
import { AuthGGuard } from './_Guards/auth-g.guard';

const routes: Routes =[
  {
    path: 'Home',
    redirectTo: '',
    component : AppPageHomeComponent
  },
  {
    path: '',
    component: AppPageHomeComponent,
  },


  {
    path: 'Admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }],
    canActivate: [AuthGGuard],
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
