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
  file:any;

  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    private categoryService:CategoryService,private fb: FormBuilder,private router:Router) {
  }
  ngOnInit() {
  }


onChange(event:any){
 this.file = event.target.files[0]
}

addCategory():any{
  const formData = new FormData();
    formData.append('image', this.file);
    formData.append('name',(<HTMLInputElement>document.getElementById("name")).value);
  this.categoryService.addNewCategory(formData).subscribe({
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
