import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  error: string = '';
  token: string ='';
  editForm:FormGroup;

  constructor(
    // private storageService: StorageService,
    private authService:AuthService,
    fb: FormBuilder,private router:Router) {

      this.editForm = fb.group(
        {
          firstName: new FormControl('', [Validators.required]),
          lastName: new FormControl('',[Validators.required]),
          email: new FormControl('', [Validators.required]),
          password: new FormControl('',[Validators.required]),
        }
      );
  }
  edit(): any {
    if (this.editForm.valid) {
      this.error = '';
      console.log(this.editForm.value)
      // this.userService.editUser(this.editForm.value).subscribe({
      //   next: (data: any) => {
      //     console.log(data);
      //     this.router.navigate(['/profile/1']);
      //   },
      //   error: (error: any) => {
      //     this.error = error?.error;
      //   },
      //   complete: () => {
      //     console.log('complete');
      //   },
      // });
    }
  }

}
