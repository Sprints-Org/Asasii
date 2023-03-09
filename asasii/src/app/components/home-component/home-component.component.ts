import { Component ,Input } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Products } from 'src/app/interfaces/products';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  categories: Category[]=[] ;
  category: Category = {} as Category;
  products:Products[]=[];
  product :Products={} as Products;
 
  getCategoryImage(){
    
    return `${environment.imageUrl}categories/`
  } 
  getproductImage(){
    return `${environment.imageUrl}products/`
  } 
  constructor(private productService:ProductService,private categoryService: CategoryService) {}
  
  ngOnInit() {
    this. productService.getProducts().subscribe((data:any) => {
      this.products = data;
      console.log(data);
     
    });
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(data);
     
      
    }); 
}
}