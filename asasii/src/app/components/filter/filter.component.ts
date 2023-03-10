
import { Component,OnInit} from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Products } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
 
  export class FilterComponent implements OnInit  {
    categories: Category[]=[] ;
    products: Products[] = [];
    category_name:string=''
    name:string='';
    constructor(private categoryService: CategoryService,private productService:ProductService) {}
  
    ngOnInit() {
      this.categoryService.getCategories().subscribe((data: any) => {
        this.categories = data;
        console.log(data);
        
      });    
      this. productService.getProducts().subscribe((data:any) => {
        this.products = data;
        console.log(data);
      });
      
      
  }

//   // searchProduct(){
//   // this. productService.searchProduct(this.name).subscribe(
    
//   // (data:any) => {
//   //   this.products = data;
//   //   console.log(data);
//   // },
//   // error=>{console.log(this.name)}
  
//   )
// };

  getProductByCategory(category_name:string){
    this. productService.getProductByCategory(category_name).subscribe((data:any) => {
      this.products = data;
      console.log(data);
    })}
}



