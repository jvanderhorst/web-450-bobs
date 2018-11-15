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

  
}
