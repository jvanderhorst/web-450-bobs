import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''  
  };
  
  //private registerUrl = '/api/register';
  private userUrl = '/api/user';
  constructor(private http: HttpClient) { }
  
  //create new users
  postUser(user: User){
    return this.http.post('/api/register',user);
  }

  //get all users
  getUser (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

  login(user) {
    return this.http.post('/api/login', user);
  }
 
 setToken(token: string) {
    localStorage.setItem('token', token);
  }
 
  getToken() {
    return localStorage.getItem('token');
  }
 
  deleteToken() {
    localStorage.removeItem('token');
  }
  
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
