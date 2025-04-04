import { Routes } from '@angular/router';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent) },
 { path: 'sign-up', loadComponent: () => import('./sign-up/sign-up.component').then((m) => m.SignUpComponent) },
 { path: 'forget-password', loadComponent: () => import('./forget-password/forget-password.component').then((m) => m.ForgetPasswordComponent) },
 { path: 'layout', loadChildren: () => import('./layout/layout.routes').then((m) => m.layoutRoutes) }
];
