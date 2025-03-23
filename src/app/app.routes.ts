import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tf', pathMatch: 'full' },
  { path: 'tf', loadComponent: () => import('./test/test.component').then( (m) => m.TestComponent )},
];
