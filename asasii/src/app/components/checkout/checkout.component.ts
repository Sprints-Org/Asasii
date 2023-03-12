import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CartLine } from 'src/app/interfaces/cart-line';
import { Orders } from 'src/app/interfaces/orders';
import { AuthService } from 'src/app/services/auth.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { StorageService } from 'src/app/services/storage.service';
// import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  error: string = '';
  token: string ='';
  country='';
  checkOutForm:FormGroup;
  cartLines: CartLine[] = [];

  constructor(
    private storageService: StorageService,
    private authService:AuthService,private router:Router, 
    private checkOutService:CheckoutService,fb: FormBuilder) {

      this.cartLines = storageService.getCartLines();

      this.checkOutForm = fb.group(
        {
          first_name: new FormControl('', [Validators.required]),
          last_name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required,Validators.email]),
          address: new FormControl('', [Validators.required]),
          phone_number: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$"),Validators.maxLength(11)]),
          country: new FormControl('',[Validators.required]),
          city: new FormControl('', [Validators.required]),
          zip_code: new FormControl('', [Validators.required]),
        }
      );
  
  }

 

  get c() {
    return this.checkOutForm.controls;
  }

  public checkout() {

    if (this.checkOutForm.valid) {

      this.error = '';
      //this.token=this.authService.getToken()
      let shipping= this.getShipping()
      let total = this.getTotal()
      let subTotal=this.getSubTotal()
      let sub_total=150;
      let status="cash";

      
      
      let shipping_info=this.checkOutForm.value

      // console.log("Country: ",this.country)
      console.log("Shipping info: ",this.checkOutForm.value.country)
    

      let order:Orders = new Orders(shipping_info,[],sub_total,
        total,status,shipping);

      console.log("Order: ",order)
      
      this.checkOutService.addOrder(order).subscribe({
        next: (data: any) => {
          alert("Order Placed Successfully")
          console.log(data);
        },
        error: (error: any) => {
          this.error = error?.error;
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
  }

  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }
  getSubTotal(): number {
    return this.cartLines
      .map((x) => x.price * x.quantity)
      .reduce((a, v) => (a += v), 0);
  }
  getShipping(): number {
    return (
      this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );}

}
