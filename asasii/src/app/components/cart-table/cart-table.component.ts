import { Component, Input } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent {
  @Input() CartLines:CartLine[]=[];
 //incQuantity(i:number){this.CartLines[i].quantity+=1};
 //decQuantity(i:number){if (this.CartLines[i].quantity>1){this.CartLines[i].quantity-=1}};
 remove(i:number){this.CartLines.splice(i,1)};
}
