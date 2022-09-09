import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginedUsers } from 'src/app/models/user';
import { SignUpUsers } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';
import data from '../../../../db.json';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public signupForm!: FormGroup;
  value: any;
  @Input() users: SignUpUsers[] = [];
  user: LoginedUsers[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private signService: SignupService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }
  signUp() {
    let userExist = data.signUpUsers.find(
      (u) => u.email == this.signupForm.value['email']
    );

    if (userExist == undefined) {
      this.http
        .post<any>('http://localhost:3000/signUpUsers', this.signupForm.value)
        .subscribe(
          (response) => {
            alert('sign up success');
            this.signupForm.reset();
            this.router.navigate(['login']);
          },
          (err) => {
            alert('something is wrong...');
          }
        );
    } else {
      alert('kullanıcı kayıtlı');
    }
  }
  get name() {
    return this.signupForm.get('fullName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get mobileNumber() {
    return this.signupForm.get('mobileNumber');
  }
  get password() {
    return this.signupForm.get('password');
  }
}
