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
    this.refreshRoleList();
    this.resetForm();
    
  }
  onSubmit(form: NgForm) {
    this.roleService.postRole(form.value).subscribe(
      res => {
        this.refreshRoleList();
        this.resetForm();
        this.getAllRoles();
        alert ('Saved successfully')
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

  resetForm(form?: NgForm) {
    if (form)
    form.reset();
    this.roleService.selectedRole = {
      roleId: '',
      roleName: ''
    };
  }

  getAllRoles(): void {
    this.roleService.getAllRoles()
    .subscribe(roles => this.roles = roles)
  }

  onDelete(roleName: string, form: NgForm) {
    if(confirm ('Are you sure you want to delete this role?') == true) {
      this.roleService.deleteRole(roleName).subscribe((res) => {
        this.getAllRoles();
        alert('Deleted successfully')
      })
    }
  }

  onEdit(role: Role) {
    this.roleService.selectedRole = role;
    this.getAllRoles();
      
  }

  refreshRoleList() {
    this.roleService.getAllRoles().subscribe((res) => {
      this.roleService.roles = res as Role[];
    })
  }

}
