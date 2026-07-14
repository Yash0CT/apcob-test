import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Welcome } from './components/welcome/welcome';
import { WelcomePage } from './page/welcome-page/welcome-page';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { PageNotFound } from './page/page-not-found/page-not-found';
import { RegistrationPage } from './page/registration-page/registration-page';

export const routes: Routes = [
    {path:"",redirectTo:'login',pathMatch:'full'},
    {path:'login',component: Login},
    {path: 'registration',component:RegistrationPage},

    {
        path:'welcome',component:WelcomePage,
        children:[ 
            {path:'',component:Welcome},
            {path:'dashboard',component:AdminDashboard}
        ]
    },
    
    {path:"**",component:PageNotFound},
];
