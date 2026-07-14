import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../service/auth';
import { Router, RouterLink } from '@angular/router';
import { TextCaptchaComponent } from '../text-captcha/text-captcha';

@Component({
  selector: 'app-login',
  imports: [FormsModule, TextCaptchaComponent, RouterLink],
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
  isCaptchaPassed = signal <boolean> (false);

  onCaptchaStatusChange(isValid:boolean){
    this.isCaptchaPassed.set(isValid);
  }

  onLogin() {
    this.authService.login(this.loginData.username,this.loginData.password,this.isCaptchaPassed());
    if(this.authService.currentUserRole()){
      console.log("login in sucessful as",this.authService.currentUserRole());
      this.router.navigate(['/welcome']);
    } else{
        alert("Invalid username or password or captcha!!!");
    }
    
  }
}

