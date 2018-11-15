import { Component } from '@angular/core';
import { AuthService }  from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authService: AuthService, 
    private userService: UserService, 
    private router: Router) { }
  
  logout(){
    this.authService.deleteToken();
    this.router.navigate([''])
  }
}
