import { Routes } from '@angular/router';
import { appUrls } from './app-mobile-routes.constant';

export const routes: Routes = [
  {
    path: '',
    redirectTo: appUrls.start,
    pathMatch: 'full',
  },
  {
    path: appUrls.start,
    loadComponent: () => import('./start/start.page').then(m => m.StartPage)
  },
];
