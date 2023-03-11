import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  EditForm:FormGroup;

  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    private productService:ProductService,fb: FormBuilder,private router:Router) {

      this.EditForm = fb.group(
        {
          name: new FormControl('', [Validators.required]),
          price: new FormControl('', [Validators.required]),
          quantity: new FormControl('', [Validators.required]),
          image: new FormControl('',[Validators.required]),
          description: new FormControl('', [Validators.required]),
          Additional_info: new FormControl('', [Validators.required]),
          colors: new FormControl('', [Validators.required]),
          category_name: new FormControl('', [Validators.required]),
        }
      );
  }
  editProduct(): any {
    if (this.EditForm.valid) {
      this.error = '';
      console.log(this.EditForm.value)
      this.productService.addNewProduct(this.EditForm.value).subscribe({
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
  
}

