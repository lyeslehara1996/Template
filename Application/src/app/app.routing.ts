import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
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
    path: '',
    loadChildren: () =>
      import('./Template/admin.module').then((m) => m.AdminModule),
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
