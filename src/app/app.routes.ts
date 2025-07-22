import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
    path: '', 
    loadChildren: () => import('./public/routing.module').then(m => m.PublicRoutingModule) 
  },
  { path: '**', redirectTo: '' }
];
