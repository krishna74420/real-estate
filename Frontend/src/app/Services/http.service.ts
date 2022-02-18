import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  get(url: string): any{
    return this.http.get(this.apiUrl + url);
  }

  getWithParams(url: string, params: any): any{
    // HttpParams
    return this.http.get(this.apiUrl + url, {params});
  }

  post(url: string, data: any): any{
    return this.http.post(this.apiUrl + url, data);
  }

  put(url: string, data: any): any{
    return this.http.put(this.apiUrl + url, data);
  }

  patch(url: string, data: any): any{
    return this.http.patch(this.apiUrl + url, data);
  }

  delete(url: string){
    return this.http.delete(this.apiUrl + url);
  }

}
