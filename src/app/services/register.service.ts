import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly url: string =
    'https://vaiku-stovykla-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private http: HttpClient) {}

  public addRegistration(registration: Register) {
    return this.http.post(this.url + 'children.json', registration);
  }

  public getRegistrations() {
    return this.http
      .get<{ [key: string]: Register }>(this.url + 'children.json')
      .pipe(
        map((response) => {
          let result: Register[] = [];
          for (let key in response) {
            result.push({ ...response[key], id: key });
          }
          return result;
        })
      );
  }
}
