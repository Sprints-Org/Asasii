import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../interfaces/Category';
import { environment } from 'src/environment/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient,private auth:AuthService) {}

  getCategories(): any {
    console.log(`${environment.apiUrl}category/`);
    

   return this.httpClient.get(`${environment.apiUrl}category/`);
    
  }
  addNewCategory(category:any):any{
    let headers= new HttpHeaders( {'Authorization': 'Bearer ' +  this.auth.getToken()});
    return this.httpClient.post(`${environment.apiUrl}category` ,category , { headers: headers });
    }
  editCategory(category:any,ID:any):any{
    let headers= new HttpHeaders( {'Authorization': 'Bearer ' +  this.auth.getToken()});
    return this.httpClient.put(`${environment.apiUrl}category/${ID}`, category,{ headers: headers });
   
  }
  deleteCategory(ID: any): any {
      let headers= new HttpHeaders( {'Authorization': 'Bearer ' +  this.auth.getToken()});
      return this.httpClient.delete(`${environment.apiUrl}category/${ID}`, { headers: headers });
    }
}
