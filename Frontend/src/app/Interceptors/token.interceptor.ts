import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionService} from '../Services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public sessionService: SessionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.sessionService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: `Bearer ${this.sessionService.getAccessToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
