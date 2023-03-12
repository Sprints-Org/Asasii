import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  error: string = '';
  token: string ='';
  file:any;
  old_product:Products;
  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    private productService:ProductService,fb: FormBuilder,private router:Router,private route: ActivatedRoute) {
      this.old_product= productService.getProductById(this.route.snapshot.paramMap.get('id')?.substring(1))
  
  }
  
onChange(event:any){
  this.file = event.target.files[0]
 }
  editProduct(): any {
    const formData = new FormData();
    formData.append('image', this.file);
    formData.append('name',(<HTMLInputElement>document.getElementById("name")).value);
    formData.append('price',(<HTMLInputElement>document.getElementById("price")).value);
    formData.append('quantity',(<HTMLInputElement>document.getElementById("quantity")).value);
    formData.append('description',(<HTMLInputElement>document.getElementById("description")).value);
    formData.append('Additional_info',(<HTMLInputElement>document.getElementById("Additional_info")).value);
    formData.append('colors',(<HTMLInputElement>document.getElementById("colors")).value);
    formData.append('category_name',(<HTMLInputElement>document.getElementById("category_name")).value);

  
      this.productService.editProduct(formData, this.route.snapshot.paramMap.get('id')).subscribe({
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['/profile/1']);
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
  


