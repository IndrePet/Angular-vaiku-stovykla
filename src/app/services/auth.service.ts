import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly key: string = 'AIzaSyCRu9-bjGsB4IQLqdvSievdze6db0wKu_k';
  private readonly url: string =
    'https://identitytoolkit.googleapis.com/v1/accounts';

  constructor(private http: HttpClient) {}

  public register(email: string, password: string) {
    return this.http.post(this.url + ':signUp?key=' + this.key, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
