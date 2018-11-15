import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private authService: AuthService, private router : Router) { }

  login = {
    username :'',
    password:''
  };
  serverErrorMessages: string;
  user: any;

  ngOnInit() {
    if(this.authService.isLoggedIn())
    this.router.navigateByUrl('/service-repair');
  }

  onSubmit(form : NgForm){
    this.authService.login(form.value).subscribe(
      res => {
        this.authService.setToken(res['token']);
        this.router.navigateByUrl('/service-repair');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}
