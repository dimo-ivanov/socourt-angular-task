
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
 
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
 
    login(email: string, password: string) {
        return this.http.post(`http://localhost:5000/auth/login`, { email: email, password: password })
            .pipe(map(user => {
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            }));
    }
 
    logout() {
        localStorage.removeItem('currentUser');
    }
  
