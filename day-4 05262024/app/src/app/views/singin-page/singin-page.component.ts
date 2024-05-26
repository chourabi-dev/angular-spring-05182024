import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singin-page',
  templateUrl: './singin-page.component.html',
  styleUrls: ['./singin-page.component.css']
})
export class SinginPageComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',  Validators.required ),
    password: new FormControl('', [ Validators.required, Validators.minLength(6) ] ),
    
  })

  constructor() { }

  ngOnInit(): void {
    console.log(this.form);
    
  }


  connect(){
    console.log("connect");
    // get the data !!!

    const data = this.form.value;

    console.log(data);
    

  }

}
