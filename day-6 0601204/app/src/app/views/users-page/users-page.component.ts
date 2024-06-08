import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users:any[] = [];
  loading:boolean = true;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.api.getUsers().toPromise().then((data:any)=>{
      console.log(data);

      this.users = data;
      
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      this.loading = false;
    })
  }

}
