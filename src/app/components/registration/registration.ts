import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserData } from '../../service/user-data';

@Component({
  selector: 'app-registration',
  imports: [FormsModule,RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private router = inject(Router)
  private userDataService = inject(UserData)

  registerData = {
    username: '',
    email: '',
    password:'',
    confirmPassword:''
  }

  errorMessage = signal< string | null >(null);

  onRegister(){
    this.errorMessage.set(null);

    if (this.registerData.confirmPassword !== this.registerData.password) {
      this.errorMessage.set("Passwords doesn't match");
      return;
    }

    // Hand data over to service
    const result = this.userDataService.registerUser(this.registerData);

    if (result.success) {
      alert('Registration successful! (' + result.message + ')');
      this.router.navigate(['/login']);
    }
  }
}
