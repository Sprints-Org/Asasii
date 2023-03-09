import { Component } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { NgModule } from '@angular/core';
import { CartTableComponent } from '../cart-table/cart-table.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
cartItems: any[] =[]
constructor() {
  // Load cart items from local storage
  const cartItemsString = localStorage.getItem('cartItems');
  this.cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
}

// Add an item to the cart
addItem(item: any) {
  this.cartItems.push(item);
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
}

// Remove an item from the cart
removeItem(index: number) {
  this.cartItems.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
}
}
