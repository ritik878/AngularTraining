import { Component, computed, OnInit, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-directives',
  imports: [NavbarComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent implements OnInit{
  canShow: boolean =false;
  toggle(){
    this.canShow = !this.canShow;
  }
  ngOnInit(): void {
    const x=signal(5);
    const y=signal(10);
    const z=computed(()=>x()+y());
    console.log(z());
    x.set(10)
    console.log(z());  
  }
}
