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
  constructor(private repairService: RepairService) { }

  ngOnInit() {
    this.getAllRepairs();
  }
  getAllRepairs(): void {
    this.repairService.getAllRepairs()
    .subscribe(repairs => this.repairs = repairs)
  }
}
