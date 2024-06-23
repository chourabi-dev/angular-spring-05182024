import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  categories:any[] = [];

  form = new FormGroup({
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    
  });
  id:string='';

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void { 
    this.api.getCategories().toPromise().then((res:any)=>{
      this.categories = res;
    })
 

    
  }
 


  save(){
    this.api.createProduct(this.form.value).toPromise().then((res:any)=>{
      console.log(res);

      if( res.success == true ){
        // redirection to list page !!
        this.router.navigateByUrl('/products');
      }
      
    })
  }

}
