import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  username:string = '';

  pi:number = 3.14;

  thisYear:number = 2024;


  access:boolean = false;


  today = new Date();


  employee:any = { email:"tchourabi@gmail.com", fullname:"chourabi taher" }


  users:string[] = [
    'users 1',
    'users 1',
    'users 1',
    'users 1',
    'users 1',
    'users 1',
    
  ]


  
  data:any[] = [
    'users 1',
    10,
    true,
    'users 1',
    'users 1',
    'users 1',
  ]


  employees:Employee[]= [
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", phone:93863732 },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", phone:93863732 },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", phone:93863732, address:"Tunisia" },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", phone:93863732, address:"France" },
    
  ]









}
