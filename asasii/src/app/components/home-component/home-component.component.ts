import { Component ,Input } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  @Input() category: Category = {} as Category;
}