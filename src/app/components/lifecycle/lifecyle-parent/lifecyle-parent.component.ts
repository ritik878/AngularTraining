import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifecyleChildComponent } from '../lifecyle-child/lifecyle-child.component';

@Component({
  selector: 'app-lifecyle-parent',
  imports: [FormsModule,LifecyleChildComponent],
  templateUrl: './lifecyle-parent.component.html',
  styleUrl: './lifecyle-parent.component.scss'
})
export class LifecyleParentComponent {
  title="Lifecycle Parent Component";
  user={'name':'Ritik'}
}
