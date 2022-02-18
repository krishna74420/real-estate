import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RealEstateInterface} from './dashboard.interface';
import {HttpService} from '../Services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService: HttpService) { }

  getRealEstate(): Observable<RealEstateInterface[]>{
    return this.httpService.get('/real_estate/');
  }
}
