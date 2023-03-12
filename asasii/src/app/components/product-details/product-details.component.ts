import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, Router } from '@angular/router';
declare function JSfun ():void;

@Component({
  selector: 'app-product-details', 
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  id:string=''
  product: Products = {} as Products;
  products: Products[] = [];
 
  constructor(private productService:ProductService, private route: ActivatedRoute) { };
 
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.productService.getProductById(this.id).subscribe((data: any) => {
      this.products=(data);
      
      console.log(data);
      console.log(this.products);       
     
    });
    this.productService.getProducts().subscribe((data: any) => {
      this.product=(data);
      
      console.log(data);
      // console.log(this.Product);
     
    });
    
}
getimage(image:string){
  return `${environment.imageUrl}products/${image}`}

}
