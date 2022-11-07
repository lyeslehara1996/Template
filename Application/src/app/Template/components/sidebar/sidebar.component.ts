import { Component, OnInit } from '@angular/core';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { UserService } from 'app/_services/UserService/user.service';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Admin/Dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  /*  { path: '/Admin/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/Admin/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/Admin/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/Admin/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/Admin/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/Admin/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/Admin/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: '/Admin/analysepotefeuildirecte', title: 'Analyse du portefeuille des engagements directs',  icon:'', class: '' },
    { path: '/Admin/analysepotefeuilindirecte', title: 'Analyse du portefeuille des engagements indirects',  icon:'', class: '' },
    { path: '/Admin/analysepotefeuilindirecte', title: 'Analyse des impayés et créances douteuses ',  icon:'', class: '' },
    { path: '/Admin/analysepotefeuilindirecte', title: 'Analyse des actions de recouvrement ',  icon:'', class: '' },*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  isLoggedIn = true;
  roles: string[] = [];
  username ?:string;
  errorMessage = '';
  users ?:any|null=null 
  constructor( private router: Router, private storageSer:StorageSService,private userService:UserService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };



  onLoggedout(){
    if(this.isLoggedIn == true){
        this.storageSer.signOut();
        this.router.navigateByUrl('/Home');
        this.isLoggedIn=false
      }else{
        this.storageSer.signOut();
        this.router.navigate(['/Home']);
      }
}
}
