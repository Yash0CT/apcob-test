import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(Auth)
  private router = inject(Router)
  
  loginData = {
    username: '',
    password: ''
  };

  

  onLogin() {
    this.authService.login(this.loginData.username,this.loginData.password);
    if(this.authService.currentUserRole()){
      console.log("login in sucessful as",this.authService.currentUserRole());
      this.router.navigate(['/welcome']);
    } else{
      alert("Invalid username or password!!!")
    }
    
  }
}

