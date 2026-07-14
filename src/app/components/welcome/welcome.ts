import { Component, inject } from '@angular/core';
import { Auth } from '../../service/auth';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  public authService = inject(Auth)
}
