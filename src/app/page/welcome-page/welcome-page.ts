import { Component } from '@angular/core';
import { WelcomeHeader } from '../../components/welcome-header/welcome-header';
import { WelcomeFooter } from '../../components/welcome-footer/welcome-footer';
import { WelcomeSideNav } from '../../components/welcome-side-nav/welcome-side-nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterOutlet,WelcomeHeader,WelcomeFooter,WelcomeSideNav],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {}
