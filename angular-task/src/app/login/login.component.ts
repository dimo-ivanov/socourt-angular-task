import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
 
import {  AuthenticationService } from '../auth/auth.service';
 
@Component(
  {templateUrl: 'login.component.html'}
)
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}
 
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
 
        this.authenticationService.logout();
 
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    get f() { return this.loginForm.controls; }
 
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
 
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/home']);
                },
                error => {
                    alert(error)
                    this.loading = false;
                });
    }
}
