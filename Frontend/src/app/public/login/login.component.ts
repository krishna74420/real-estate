import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PublicService} from '../public.service';
import {SessionService} from '../../Services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm: FormGroup|any ;
  showError = false;
  isLoading = false;

  constructor(private formBuilder: FormBuilder,
              private publicService: PublicService,
              private sessionService: SessionService) {
    this.initializeForm();
  }


  initializeForm(){
    this.loginForm = this.formBuilder.group({
      email: ['info@realestate.com', [Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  doLogin(){
    this.isLoading = true;
    this.showError = false;
    if ( this.loginForm.valid ){
      this.publicService.login(this.loginForm.value).subscribe( res => {
        this.sessionService.setSession(res);
        this.isLoading = false;
      }, () => {
        this.showError = true;
        this.isLoading = false;
      });
    }
  }


}
