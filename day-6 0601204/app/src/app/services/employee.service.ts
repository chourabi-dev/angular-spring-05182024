import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees:any[] = [];

  constructor() { }



  addNewwEmployee(employee:any){
    this.employees.push(employee);
  }

  getEmployees(){
    return this.employees;
  }


}
