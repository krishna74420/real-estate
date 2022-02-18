import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicPageRoutingModule } from './public-routing.module';

import { PublicPage } from './public.page';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PublicPage,
    LoginComponent
  ]
})
export class PublicPageModule {}
