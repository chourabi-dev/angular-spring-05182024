import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  elements:Todo[] = [];


  form = new FormGroup({
    todo: new FormControl('',Validators.required)
  })



  myInput:string = "";


  constructor() { }

  ngOnInit(): void {
  }


  add(){
    const todo = {
      content: ""+this.form.value.todo,
      createdAt: new Date()
    }


    this.elements.push(todo);


    // reset from
    this.form.reset();

  }



  add2(){
    console.log("clicked !!!");
    
    const todo = {
      content: this.myInput,
      createdAt: new Date()
    }

    this.elements.push(todo);


    this.myInput = "";
  }

}
