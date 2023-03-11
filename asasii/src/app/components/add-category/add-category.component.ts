import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  error: string = '';
  token: string ='';
  AddForm:FormGroup;

  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    private categoryService:CategoryService,fb: FormBuilder,private router:Router) {

      this.AddForm = fb.group(
        {
          name: new FormControl('', [Validators.required]),
          image: new FormControl('',[Validators.required]),
        }
      );
  }
  addCategory(): any {
    if (this.AddForm.valid) {
      this.error = '';
      console.log(this.AddForm.value)
      this.categoryService.addNewCategory(this.AddForm.value)
      .subscribe({
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
      }
      );
    }
  }
}
