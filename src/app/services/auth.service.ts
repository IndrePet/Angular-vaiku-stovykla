import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly key: string = 'AIzaSyCRu9-bjGsB4IQLqdvSievdze6db0wKu_k';
  private readonly url: string =
    'https://identitytoolkit.googleapis.com/v1/accounts';

  public user: User | null = null;
  public userUpdate = new EventEmitter();

  private responseSuccess = (response: User) => {
    this.user = User.generateUser(response);
    localStorage.setItem('userData', JSON.stringify(this.user));
    this.userUpdate.emit();
  };

  constructor(private http: HttpClient) {}

  public register(email: string, password: string) {
    return this.http
      .post<User>(this.url + ':signUp?key=' + this.key, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(tap(this.responseSuccess));
  }

  public login(email: string, password: string) {
    return this.http
      .post<User>(this.url + ':signInWithPassword?key=' + this.key, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(tap(this.responseSuccess));
  }

  public changePassword(password: string) {
    return this.http.post<User>(this.url + ':update?key=' + this.key, {
      idToken: this.user?.idToken,
      password,
      returnSecureToken: true,
    });
  }

  public isLoggedIn() {
    let data = localStorage.getItem('userData');
    if (data != null) {
      let t: User = JSON.parse(data);
      this.user = User.generateUser(t, t.loginTime);
      if (this.user.isExpired()) {
        this.user = null;
        localStorage.removeItem('userData');
      }
    }
  }

  public onLogout() {
    this.user = null;
    localStorage.removeItem('userData');
    this.userUpdate.emit();
  }
}
