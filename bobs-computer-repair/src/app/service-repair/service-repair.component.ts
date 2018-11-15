import { Component, OnInit } from '@angular/core';
import { RepairService } from '../services/repair.service';
import { Repair } from '../models/repair';
import { AuthService, UserDetails, } from '../services/auth.service';
import { User } from '../models/user';


@Component({
  selector: 'app-service-repair',
  templateUrl: './service-repair.component.html',
  styleUrls: ['./service-repair.component.css']
})
export class ServiceRepairComponent implements OnInit {
  repairs: Repair[];
  recentService = "";
  private cart = [];
  user: User;
  details: UserDetails;
  //currentUser: User;
  
  constructor(
    private repairService: RepairService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.getAllRepairs();
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.authService.getUserProfile().subscribe(
      user => {
        this.user = user;
      }, (err) => { 
        console.log(err);
        
      });
  }
  getAllRepairs(): void {
    this.repairService.getAllRepairs()
    .subscribe(repairs => this.repairs = repairs)
  }

  selectedService(repair){
    this.recentService = repair;
    this.cart.push(repair);
  }

  removeService(repair, index){
    this.cart.splice(index, 1);
  }
}
