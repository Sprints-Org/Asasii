import { AfterViewInit, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare function JSSignIn(): void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  error: string = '';
  token: string = '';
  signupForm: FormGroup;
  signinForm: FormGroup;

  constructor(
    // private storageService: StorageService,
    private authService: AuthService,
    fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required])
    });

    this.signinForm = fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signup(): any {
    if (this.signupForm.valid) {
      this.error = '';
      console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe({
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
  signin(): any {
    if (this.signinForm.valid) {
      this.error = '';
      console.log(this.signinForm.value);
     this.authService.login(this.signinForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
          this.authService.saveLoginData(data);
          this.router.navigate(['/myprofile',data.userId]);
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
  ngAfterViewInit(): void {
    JSSignIn();
  }
}
