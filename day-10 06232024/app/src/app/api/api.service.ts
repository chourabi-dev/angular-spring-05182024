import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getCategories(){
    return this.http.get('http://localhost:8081/api/categories/list');
  }
  

  getProducts(){
    return this.http.get('http://localhost:8081/api/products/list');
  }


  findProductByID(id:string){
    
    return this.http.get('http://localhost:8081/api/products/find-by-id/'+id);
  }


  updateProduct(data:any,id:string){
    return this.http.put('http://localhost:8081/api/products/update/'+id, data);
  }

  createProduct(data:any){
    return this.http.post('http://localhost:8081/api/products/add', data);
  }
  
  deleteProduct(id:number){
    return this.http.delete('http://localhost:8081/api/products/delete/'+id);
  }
  
  
}
