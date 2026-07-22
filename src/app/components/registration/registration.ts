import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserData } from '../../service/user-data';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  public fb = inject(FormBuilder)
  private router = inject(Router)
  private userDataService = inject(UserData)

  registrationForm : FormGroup = this.fb.group({
    name : [''],
    email: [''],
    city: [''],
    username: [''],
    password: [''],
    confirmPassword: ['']
  })

  errorMessage = signal< string | null >(null);

  onRegister(){
    this.errorMessage.set(null);
    if(this.registrationForm.value.password !==this.registrationForm.value.confirmPassword){
      this.errorMessage.set("Passwords do not match")
    }

    console.log(this.registrationForm.value)

    // Hand data over to service
    const result = this.userDataService.registerUser(this.registrationForm.value);

    if (result.success) {
      alert('Registration successful! (' + result.message + ')');
      this.router.navigate(['/login']);
    }
  }
}
