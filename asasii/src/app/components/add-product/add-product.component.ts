import { AfterViewInit, Component } from '@angular/core';
declare function JsAddProduct():void;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    JsAddProduct();
  }

}
