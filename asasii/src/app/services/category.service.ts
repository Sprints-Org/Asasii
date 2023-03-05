import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../interfaces/categories';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): any {
    return this.httpClient.get(`${environment.apiUrl}categories/`);
  }
}
