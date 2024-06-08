import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.css']
})
export class AddEmployeePageComponent implements OnInit {

  form = new FormGroup({
    fullname: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });


  // injection !!
  constructor(private employee:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    const data = this.form.value;

    this.employee.addNewwEmployee(data);


    // redirection home !!!

    this.router.navigateByUrl('home');




  }

}
