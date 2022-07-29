import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public signupForm: FormGroup;
  value: any;
  users: any[];
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
      mobileNumber: ['', [Validators.required, Validators.pattern('')]],
      password: ['', Validators.required],
    });
  }
  signUp() {
    return this.http
      .post<any>('http://localhost:3000/signUpUsers', this.signupForm.value)
      .subscribe(
        (response) => {
          this.users = response;
          console.log(this.users);

          if (this.signupForm.value.email === this.users['email']) {
            console.log(this.users);
            console.log('kayıtlı eposta');
          }
          alert('sign up success');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('something is wrong...');
        }
      );
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
