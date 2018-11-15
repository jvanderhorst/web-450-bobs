import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { Router } from "@angular/router";

export interface UserDetails {
  userId: string;
  firstName: string;
  lastName: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: '',
    confirmPassword: '',
    questionOne: {
      questionName: '',
      answer: ''
    },
    questionTwo: {
      questionName: '',
      answer: ''
    },
    questionThree: {
      questionName: '',
      answer: ''
    },
    role: 'standard'
  };
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  redirectUrl: string;
  loggedIn = false;
  private token: string;
  private registerUrl = '/api/register';
  private loginUrl = '/api/login';
  private userUrl = '/api/user';
  private profileUrl ='/api/profile';
  private tokenUrl = '/api/token';

  constructor(private http: HttpClient, private router: Router) { }

  //create new users
  postUser(user: User){
    return this.http.post('/api/register',user);
  }

  //get all users
  getUser (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

  login(authCredentials) {
    return this.http.post(this.loginUrl, authCredentials,this.noAuthHeader);
  }

  getUserProfile(): Observable<any> {
    return this.http.get(this.profileUrl)
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  getToken(): string {
    if(!this.token) {
    this.token = localStorage.getItem('token');
    }
    return this.token;
  }
  

  deleteToken(): void {
    this.token = '';
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  getUserPayload(): UserDetails {
    const token = this.getToken();
    let userPayload;
    if (token) {
      userPayload = token.split('.')[1];
      userPayload = window.atob(userPayload);
      return JSON.parse(userPayload);
    }
    else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    const user = this.getUserPayload();
    if (user) {
      return user !== null;
    } else {
      return false;
    }
  }

   
}
