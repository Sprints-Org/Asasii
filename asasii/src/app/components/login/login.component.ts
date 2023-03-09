import { AfterViewInit, Component } from '@angular/core';
declare function JSSignIn ():void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    JSSignIn();
  }
}