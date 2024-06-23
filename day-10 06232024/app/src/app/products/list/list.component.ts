import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:any[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getProducts().toPromise().then((res:any)=>{
      console.log(res);
      
      this.products = res;
    })
  }


  deleteProduct(id:number){
    this.api.deleteProduct(id).toPromise().then((res:any)=>{
      if (res.success == true) {
        // refrech !!
        this.getData();
      }
    })
  } 
}
