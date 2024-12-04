import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';

export const routes: Routes = [ 
    {path : "home" ,  loadComponent:()=> import("./core/pages/home/home.component").then(c => c.HomeComponent)},
    {path : "auth" ,
    loadComponent:()=> import("./core/Layout/auth-layout/auth-layout.component").then(c => c.AuthLayoutComponent),
    children:[
        {path:"",
            redirectTo:"login",
            pathMatch:"full"
        },
        {path : "login" ,  loadComponent:()=> import("./core/pages/login/login.component").then(c => c.LoginComponent)},
        {path : "register" ,  loadComponent:()=> import("./core/pages/register/register.component").then(c => c.RegisterComponent)},
        {path : "forgetPass" ,  loadComponent:()=> import("./core/pages/forget-password/forget-password.component").then(c => c.ForgetPasswordComponent)},
        {path : "verifyCode" ,  loadComponent:()=> import("./core/pages/verify-code/verify-code.component").then(c => c.VerifyCodeComponent)},
        {path : "setPass" ,  loadComponent:()=> import("./core/pages/set-passowrd/set-passowrd.component").then(c => c.SetPassowrdComponent)},

    ]
},
    

];
