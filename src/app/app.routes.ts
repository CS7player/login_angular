import { Routes } from '@angular/router';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'tf', loadComponent: () => import('./test/test.component').then((m) => m.TestComponent) },
 { path: 'login', loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent) },
 { path: 'sign-up', loadComponent: () => import('./sign-up/sign-up.component').then((m) => m.SignUpComponent) }
];
