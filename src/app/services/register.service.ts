import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
