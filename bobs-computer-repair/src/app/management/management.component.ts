import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from '../models/user';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    this.userService.getUser()
    .subscribe(users => this.users = users)
  }
}
