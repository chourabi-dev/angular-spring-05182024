import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obsevable-test',
  templateUrl: './obsevable-test.component.html',
  styleUrls: ['./obsevable-test.component.css']
})
export class ObsevableTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  startWatch(){
      this.watchMyCurrentPostion().subscribe((data)=>{
        console.log(data);
      },(err)=>{
        console.log(err);
      })
  }


  watchMyCurrentPostion(){

    let obersvable = new Observable(( observer )=>{
      
      navigator.geolocation.watchPosition((position)=>{
        observer.next(position);
      },(err)=>{
        observer.error(err);
      })

    })


    return obersvable;

  }




}
