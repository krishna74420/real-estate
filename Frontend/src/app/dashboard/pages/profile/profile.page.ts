import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../../../public/public.interface';
import {SessionService} from '../../../Services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  user: UserInterface|any = [];
  constructor(private sessionService: SessionService) {
    this.getUser();
  }

  getUser(){
    this.user = this.sessionService.getUser();
  }

  doLogout(){
    this.sessionService.destroySession();
  }

}
