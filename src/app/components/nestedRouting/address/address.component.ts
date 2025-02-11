import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SecondaryAdressComponent } from '../secondary-adress/secondary-adress.component';
import { PrimaryAddressComponent } from '../primary-address/primary-address.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-address',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {

}
