import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/signUpUsers';

  constructor(
    private http: HttpClient
  ) {}
  login() {
    let newPath = this.url;
    return this.http.get<any>(newPath);
  }

}
