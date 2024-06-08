import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  employees:any[] = [];


  constructor(private employee:EmployeeService) { }

  ngOnInit(): void {
    // init array !!!!
    this.employees = this.employee.getEmployees();
  }

}
