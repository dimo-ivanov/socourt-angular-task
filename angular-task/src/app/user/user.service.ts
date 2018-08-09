import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators';

 
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get(`/stats`);
    }

    register(user) {
     return this.http.post(`http://localhost:5000/auth/signup`, user)
    }
}
