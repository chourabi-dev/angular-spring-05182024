import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categories:any[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDATA();
  }

  getDATA(){
    this.api.getCategories().toPromise().then((res:any)=>{
      console.log(res);
      this.categories = res;
      
    })
  }

}
