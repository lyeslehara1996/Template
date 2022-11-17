import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppPageHomeComponent } from './app-page-home/app-page-home.component';
import { AuthGGuard } from './_Guards/auth-g.guard';
import { AuthPermissionsGuard } from './_Guards/auth-permissions.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationPasswordComponent } from './confirmation-password/confirmation-password.component';

const routes: Routes =[
  {
    path: 'Home',
    redirectTo: '',
    component : AppPageHomeComponent
  },
  {
    path: 'ForgotPassword',
    component : ForgotPasswordComponent
  },
  {
    path: 'ResetPassword/:token',
    component : ConfirmationPasswordComponent
  },
  {
    path: '',
    component: AppPageHomeComponent,
  },


  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGGuard],
    
  },
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
