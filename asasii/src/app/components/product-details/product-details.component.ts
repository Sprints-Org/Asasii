import { AfterViewInit, Component, Input } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environment/environment';
declare function JSfun ():void;

@Component({
  selector: 'app-product-details', 
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    JSfun();
  }

products:Products[]=[];
  product :Products={} as Products;
 getimage(){
    return `${environment.imageUrl}products/${this.product.image}`
  } 
  constructor(private productService:ProductService) {}
  
  ngOnInit() {
    this. productService.getProducts().subscribe((data:any) => {
      this.products = data;
    });
}

}
