import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Products } from '../interfaces/products';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProducts: Products[] = [];

  constructor(private httpClient: HttpClient,private auth:AuthService) {}

  getProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}product`);
  }

  getProductById(id:any):any{
    return this.httpClient.get(`${environment.apiUrl}product/${id}`);
  }

  addProduct(product: Products): void {
    this.cartProducts.push(product);
  }
  getProductByCategory(category_name:string){
    return this.httpClient.get(`${environment.apiUrl}category/${category_name}/products`);
  }

  addNewProduct(product:any): any {
    let headers= new HttpHeaders({Authorization : [`Bearer ${this.auth.getToken()}`],'Content-Type': 'multipart/form-data'});
    return this.httpClient.post(`${environment.apiUrl}product`,headers ,product);
    }
  
}
