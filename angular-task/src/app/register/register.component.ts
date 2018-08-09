import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
 
import { UserService } from '../user/user.service';
 
@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
 
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    get f() { return this.registerForm.controls; }
 
    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
 
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                   console.log('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }