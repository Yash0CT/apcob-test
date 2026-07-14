import { Component, inject } from '@angular/core';
import { Auth } from '../../service/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {
  private authService = inject(Auth);

  ngOnInit() {
    // Automatically log the user out if they hit a non-existent route
    this.authService.logout();
  }

}
