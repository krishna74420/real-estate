import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicGuard} from '../Guards/public.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    canActivate:[PublicGuard],
    path: 'Login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
