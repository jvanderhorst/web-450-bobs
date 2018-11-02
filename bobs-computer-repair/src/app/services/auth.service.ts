import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

private registerUrl = '/api/register';

  constructor(private http: HttpClient) { }

  /*registerUser(user) {
    return this.http.post(this.registerUrl, user).pipe(map(res => res.json()));
  }*/
  
}
