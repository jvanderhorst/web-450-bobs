import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoleService } from '../services/role.service';
import { Role } from '../models/role';

@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.css']
})
export class RoleManagerComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  roles: Role[]
  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getAllRoles();
  }
  onSubmit(form: NgForm) {
    this.roleService.postRole(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please try again';
      }
    );
  }

  resetForm(form: NgForm) {
    this.roleService.selectedRole = {
      roleId: '',
      roleName: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  getAllRoles(): void {
    this.roleService.getAllRoles()
    .subscribe(roles => this.roles = roles)
  }
}
