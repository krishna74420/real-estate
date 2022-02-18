import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LoginSuccessInterface, UserInterface} from '../public/public.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  accessTokenKeyName = 'access';
  userKeyName = 'user';
  storage = localStorage;

  constructor(
    private router: Router
  ) { }

  setSession(authResponse: LoginSuccessInterface) {
    this.setItem(this.accessTokenKeyName, authResponse.access_token);
    this.setItem(this.userKeyName, JSON.stringify(authResponse.user));
    this.navigate('/Dashboard/');
  }


  setCurrentPage(url: string){
    this.setItem('currentPage', url);
  }

  setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getItem(key: string): string | null{
    return this.storage.getItem(key);
  }

  destroySession() {
    this.deleteAllItem();
    this.navigate('/');
  }

  deleteAllItem() {
    this.storage.clear();
  }

  getUser(): UserInterface {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return JSON.parse(<string>this.getItem(this.userKeyName)) as UserInterface;
  }

  getAccessToken(): string|null {
    return this.getItem('access');
  }

  isAuthenticated() {
    return !!localStorage.getItem('access');
  }

  navigate(route: string) {
    this.router.navigate([route],
      ).then( () => {
      this.setCurrentPage(route);
    });
  }
}
