import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpUsers } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  public signupForm: FormGroup;
  private url = 'http://localhost:3000/signUpUsers';
   private value: any;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

    signedUser(){

     let  value=this.value
    let newPath = this.url;
    return this.http.post<any>(newPath,this.signupForm.value);
  }

}
