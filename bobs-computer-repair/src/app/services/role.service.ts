import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../models/role';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  selectedRole: Role = {
    roleId: '',
    roleName: ''
    };

  roles: Role[];

  constructor(private http: HttpClient) { }

  //get all roles
  getAllRoles (): Observable<Role[]> {
    return this.http.get<Role[]>('/api/role')
  }

  postRole(role: Role){
    return this.http.post('/api/addRole', role);
  }

  deleteRole(roleId: string) {
    return this.http.delete('/api/removeRole/:roleId');
  }

  updateRole(role: Role) {
    return this.http.put('/api/updateRole/:roleId', role)
  }
}
