import { Injectable } from '@angular/core';
import {HttpService} from '../Services/http.service';
import {LoginInterface, LoginSuccessInterface} from './public.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private httpService: HttpService) {
  }

  login(data: LoginInterface): Observable<LoginSuccessInterface> {
    return this.httpService.post('/auth/login', data);
  }
}
