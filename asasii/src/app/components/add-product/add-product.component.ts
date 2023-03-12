import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
declare function JsAddProduct():void;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements AfterViewInit {
  error: string = '';
  token: string ='';
  file:any;

  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    private productService:ProductService,fb: FormBuilder,private router:Router) {
      // this.AddForm = fb.group(
      //   {
      //     name: new FormControl('', [Validators.required]),
      //     price: new FormControl('', [Validators.required]),
      //     quantity: new FormControl('', [Validators.required]),
      //     image: new FormControl('',[Validators.required]),
      //     description: new FormControl('', [Validators.required]),
      //     Additional_info: new FormControl('', [Validators.required]),
      //     colors: new FormControl('', [Validators.required]),
      //     category_name: new FormControl('', [Validators.required]),
      //   }
      // );
  }
  
onChange(event:any){
 this.file = event.target.files[0]
}

  addProduct(): any {
    const formData = new FormData();
    formData.append('image', this.file);
    formData.append('name',(<HTMLInputElement>document.getElementById("name")).value);
    formData.append('price',(<HTMLInputElement>document.getElementById("price")).value);
    formData.append('quantity',(<HTMLInputElement>document.getElementById("quantity")).value);
    formData.append('description',(<HTMLInputElement>document.getElementById("description")).value);
    formData.append('Additional_info',(<HTMLInputElement>document.getElementById("Additional_info")).value);
    formData.append('colors',(<HTMLInputElement>document.getElementById("colors")).value);
    formData.append('category_name',(<HTMLInputElement>document.getElementById("category_name")).value);

  this.productService.addNewProduct(formData).subscribe({
            next: (data: any) => {
              console.log(data);
            },
            error: (error: any) => {
              this.error = error?.error;
            },
            complete: () => {
              console.log('complete');
            },
          }
        );
  } 

  ngAfterViewInit(): void {
    JsAddProduct();
  }
  

}
