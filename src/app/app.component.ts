import { Component } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmulatedComponent } from './components/emulated/emulated.component';
import { NoneComponent } from './components/none/none.component';
import { ShadowComponent } from './components/shadow/shadow.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AuthComponent,CommonModule,RouterOutlet,RouterLink,RouterLinkActive,FormsModule,EmulatedComponent,NoneComponent,ShadowComponent,HomeComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  name='Angular';
  changeName(name: string)
  {
    this.name=name;
  }
}
