import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartLength:number=0;
  isAdmin:boolean=false;
  constructor(private router: Router,private cartService:CartServiceService) {
    this.cartLength = this.cartService.getLength();
    if(localStorage.getItem('role')=='admin'){
      this.isAdmin=true;
    }
    else{
      this.isAdmin=false;
    }
  }

  onLogout(): void {
    // e.g., this.authService.logout();
    localStorage.removeItem('role');
    this.router.navigate(['/auth']);
  }
}
