import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.css']
})
export class PromiseTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.takePhoto();
  }


  getCamera(){
    let promise  = new Promise(( success,failure )=>{

      // traitment ...
      setTimeout(()=>{
        failure("Camera is not ready");
      },3000)

    });

    return promise; 
  }



  // 100% sure , promise is successfull !!!!

  /*async takePhoto(){
    let camera = await this.getCamera();

    console.log(camera);


    console.log("start takeing photos ...");
    
    

  }*/



  takePhoto(){
    this.getCamera().then((camera)=>{
      console.log(camera);
      
    }).catch((err)=>{
      console.log(err);
      
    });
  }

}
