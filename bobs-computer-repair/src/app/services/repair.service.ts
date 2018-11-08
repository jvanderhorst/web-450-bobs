import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Repair } from '../models/repair';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  
  constructor(private http: HttpClient) { }

  //get all roles
  getAllRepairs (): Observable<Repair[]> {
    return this.http.get<Repair[]>('/api/repair')
  }

  postRepair(repair: Repair){
    return this.http.post('/api/addRepair', repair);
  }
}
