import { AfterViewInit, Component, Input } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environment/environment';
import { StorageService } from 'src/app/services/storage.service';
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

  product: Products = {} as Products;
  products: Products[] = [];
  quantity: number = 1;
 getimage(){
    return `${environment.imageUrl}products/${this.product.image}`
  } 
  constructor(private productService:ProductService,private storageService: StorageService) {}
 
  
  incQuantity() {
    this.quantity += 1;
  }
  decQuantity() {
    if (this.quantity > 1) this.quantity -= 1;
  }

  addToCartWithQuantity() {
    this.storageService.addProducts(this.product, this.quantity);
  }
 
  ngOnInit() {
    this. productService.getProducts().subscribe((data:any) => {
      this.products = data;
    });
}

}
