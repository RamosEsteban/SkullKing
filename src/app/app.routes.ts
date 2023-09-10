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
    loadComponent: () => import('./pages/start/start.page').then(m => m.StartPage)
  },
  {
    path: appUrls.gameBoard,
    loadComponent: () => import('./game-board/game-board.page').then( m => m.GameBoardPage)
  },

];
