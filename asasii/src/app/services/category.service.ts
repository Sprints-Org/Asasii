import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/Category';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): any {
    console.log(`${environment.apiUrl}category/`);
    

   return this.httpClient.get(`${environment.apiUrl}category/`);
    
  }
}
