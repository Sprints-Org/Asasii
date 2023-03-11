import { Component } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {
  products: Products[] = [];
  constructor(private productService:ProductService) {}

  ngOnInit() {
     
    this. productService.getProducts().subscribe((data:any) => {
      this.products = data;
      console.log(data);
    });
}
}