import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
    private router = inject(Router)
    currentUserRole=signal<string | null>(null);

    constructor(){}
    
    // determining the role
    login(username:string,password:string,captcha:boolean){
        if(username === 'Admin' && password === 'Admin@123' && captcha) {
          this.currentUserRole.set("Admin");
        }
        if(username === 'user' && password === 'user@123' && captcha){
          this.currentUserRole.set("user");
        }
    }

    logoutPageNotFound(){
      this.currentUserRole.set(null);
    }

    logout(){
      this.currentUserRole.set(null);
      this.router.navigate(['/login']);
    }


}
