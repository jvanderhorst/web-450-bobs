import { Component, OnInit } from '@angular/core';
import { RepairService } from '../services/repair.service';
import { Repair } from '../models/repair';

@Component({
  selector: 'app-service-repair',
  templateUrl: './service-repair.component.html',
  styleUrls: ['./service-repair.component.css']
})
export class ServiceRepairComponent implements OnInit {
  repairs: Repair[];
  recentService = "";
  private cart = [];
  
  constructor(private repairService: RepairService) { }

  ngOnInit() {
    this.getAllRepairs();
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
