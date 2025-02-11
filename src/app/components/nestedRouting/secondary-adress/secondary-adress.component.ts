import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-adress',
  imports: [],
  templateUrl: './secondary-adress.component.html',
  styleUrl: './secondary-adress.component.scss'
})
export class SecondaryAdressComponent {
  constructor(private router:Router) { }
  navigate(path:string)
  {
    this.router.navigate([path]);
  }
}
