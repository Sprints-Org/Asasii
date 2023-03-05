import { Injectable } from '@angular/core';
//import { CartLine } from '../interfaces/cart-line';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getProductsFromLocalStorage(): Products[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  addProducts(product: Products, quantity: number) {
    const products: Products[] = this.getProductsFromLocalStorage();
    for (let i = 0; i < quantity; i++) {
      products.push(product);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCartLines(): CartLine[] {
    const products: Products[] = this.getProductsFromLocalStorage();
    const cartLines: CartLine[] = [];
    products.forEach((p) => {
      const ix = cartLines.findIndex((x) => x.product._id === p._id);
      if (ix >= 0) {
        cartLines[ix].quantity += 1;
      } else {
        let cartLine = new CartLine(p)
        cartLines.push(cartLine);
      }
    });
    return cartLines;
  }
  save(cartLines: CartLine[]) {
    const products: Products[] = [];
    cartLines.forEach((c) => {
      for (let i = 0; i < c.quantity; i++) {
        products.push(c.product);
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  getQuantity(): number {
    const products = this.getProductsFromLocalStorage();
    return products?.length || 0;
  }
}
