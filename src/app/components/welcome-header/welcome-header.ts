import { Component, inject } from '@angular/core';
import { Auth } from '../../service/auth';

@Component({
  selector: 'app-welcome-header',
  imports: [],
  templateUrl: './welcome-header.html',
  styleUrl: './welcome-header.css',
})
export class WelcomeHeader {
  public authService = inject(Auth)
}
