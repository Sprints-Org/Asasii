import { Component,Input,OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product : Products = {} as Products;
  constructor(private productService:ProductService){}
  
    addProductToCart(){
    this.productService.addProduct(this.product)}
  

 getimage(){
    return `${environment.imageUrl}products/${this.product.image}`
  } 


}
 