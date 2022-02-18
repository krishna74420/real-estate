import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '../Services/session.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanLoad , CanActivate {

  constructor(private sessionService: SessionService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.sessionService.isAuthenticated();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if ( this.sessionService.isAuthenticated() ){
      this.sessionService.navigate('/Dashboard/');
      return false;
    }
    else{
      return true;
    }
  }
}
