import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  error: string = '';
  token: string ='';
  file:any;
  oldCategory:Category;
  

  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    private categoryService:CategoryService,fb: FormBuilder,private router:Router,private route: ActivatedRoute) {
     this.oldCategory= categoryService.getCategoryById(this.route.snapshot.paramMap.get('id')?.substring(1))
     console.log(this.oldCategory,this.route.snapshot.paramMap.get('id')?.substring(1))
  }
  
onChange(event:any){
  this.file = event.target.files[0]
 }
 
  editCategory(): any {
    const formData = new FormData();
    formData.append('image', this.file);
    formData.append('name',(<HTMLInputElement>document.getElementById("name")).value);
  this.categoryService.editCategory(formData,this.route.snapshot.paramMap.get('id')?.substring(1)).subscribe({
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
  }
  

