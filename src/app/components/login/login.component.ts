import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  value: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) {}
user:[]
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
    });
  }
  login() {
    this.loginService.login().subscribe(
      (response) => {
        const user = response.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {

          alert('login success');
          this.loginForm.reset();
          this.router.navigate(['home']);
        } else {
          alert('user not found');
        }

      },

      (err) => {
        alert('something is');
      }
    );

  }
  get email() {
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get("password")
  }
}
