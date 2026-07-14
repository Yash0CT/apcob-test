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
    login(username:string,password:string){
        if(username === 'Admin' && password === 'Admin@123') {
          this.currentUserRole.set("Admin");
        }
        if(username === 'user' && password === 'user@123'){
          this.currentUserRole.set("user");
        }
    }

    logout(){
      this.currentUserRole.set(null);
      this.router.navigate(['/login']);
    }


}
