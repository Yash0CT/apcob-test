import { Component, inject, OnInit, signal } from '@angular/core';
import { Auth } from '../../service/auth';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-welcome-side-nav',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './welcome-side-nav.html',
  styleUrl: './welcome-side-nav.css',
})
export class WelcomeSideNav implements OnInit {
  public authService = inject(Auth);

  adminMenu = [
    { name: 'Welcome', path: '/welcome'},
    { name: 'Dashboard',path:'/welcome/dashboard'}
  ];

  userMenu = [
    { name: 'Welcome', path: '/welcome'}
  ];

  // Initialize as a blank object array
  menuItems: { name: string; path: string }[] = [];

  ngOnInit(): void {
    if (this.authService.currentUserRole() === 'Admin') {
      this.menuItems = this.adminMenu;
    }
    if (this.authService.currentUserRole() === 'user') {
      this.menuItems = this.userMenu;
    }
  }
}
