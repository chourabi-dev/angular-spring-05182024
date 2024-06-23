import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  categories:any[] = [];

  form = new FormGroup({
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    
  });
  id:string='';

  constructor(private api:ApiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];


    this.api.getCategories().toPromise().then((res:any)=>{
      this.categories = res;
    })

    this.initForm();


    
  }


  initForm(){
    this.api.findProductByID(this.id).toPromise().then((res:any)=>{
      console.log(res);

      this.form.setValue(res);
      
    })
  }


  save(){
    this.api.updateProduct(this.form.value,this.id).toPromise().then((res:any)=>{
      console.log(res);

      if( res.success == true ){
        // redirection to list page !!
        this.router.navigateByUrl('/products');
      }
      
    })
  }
}
