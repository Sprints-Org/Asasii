import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {
  categories: Category[] = [];
  constructor(private Categorieservice:CategoryService) {}
  getCategoryImage(){
    
    return `${environment.imageUrl}categories/`
  } 

  ngOnInit() {
     
    this. Categorieservice.getCategories().subscribe((data:any) => {
      this.categories = data;
      console.log(data);
    });
}

}
