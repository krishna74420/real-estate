import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PublicGuard} from './Guards/public.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Public',
    pathMatch: 'full'
  },
  {
    path: 'Public',
    canLoad: [PublicGuard],
    loadChildren: () => import('./public/public.module').then( m => m.PublicPageModule)
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
