import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [FormsModule,RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private router = inject(Router)

  registerData = {
    username: '',
    email: '',
    password:'',
    confirmPassword:''
  }

  errorMessage = signal< string | null >(null);

  onRegister(){
    this.errorMessage.set(null);
    
    if(this.registerData.confirmPassword!==this.registerData.password){
        this.errorMessage.set("Passwords doesn't match")
        return;
    }

    console.log("Registed user details",this.registerData);

    alert("Registration successful, Redirecting to login...")
    this.router.navigate(["/login"]);
  }
}
