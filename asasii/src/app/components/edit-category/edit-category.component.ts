import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  error: string = '';
  token: string ='';
  EditForm:FormGroup;

  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    private categoryService:CategoryService,fb: FormBuilder,private router:Router) {

      this.EditForm = fb.group(
        {
          name: new FormControl('', [Validators.required]),
          image: new FormControl('',[Validators.required]),
        }
      );
  }
  editCategory(): any {
    if (this.EditForm.valid) {
      this.error = '';
      console.log(this.EditForm.value)
      this.categoryService.editCategory(this.EditForm.value).subscribe({
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
