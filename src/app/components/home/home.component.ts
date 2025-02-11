import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}
  onLogout(): void {
    // If you have an AuthService, call logout there
    // e.g., this.authService.logout();
    this.router.navigate(['/auth']); // Navigate back to Auth page
  }
}
