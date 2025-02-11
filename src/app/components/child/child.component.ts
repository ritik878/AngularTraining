import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() name: string;
  @Output() nameChange:EventEmitter<string> = new EventEmitter<string>();

  emitEvent()
  {
    this.nameChange.emit('React');
  }
}
