import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }

  login = {
    username :'',
    password:''
  };
  serverErrorMessages: string;

  ngOnInit() {
    
  }
 
  onSubmit(form : NgForm){
    
  }

}
