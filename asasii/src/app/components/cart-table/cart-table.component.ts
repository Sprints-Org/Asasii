import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent {
  constructor(private storageService:StorageService){

  }
  @Input() CartLines:CartLine[]=[];
  @Output() limitAlert = new EventEmitter<string>();
 
 remove(i: number) {
  this.CartLines.splice(i,1);
  this.storageService.save(this.CartLines);
}
 getproductImage(image:string){
  return `${environment.imageUrl}products/${image}`;
}
}
