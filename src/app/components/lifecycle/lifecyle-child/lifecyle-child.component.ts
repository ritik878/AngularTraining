import { AfterContentInit, Component, ContentChild, contentChild, DoCheck, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyle-child',
  imports: [],
  templateUrl: './lifecyle-child.component.html',
  styleUrl: './lifecyle-child.component.scss'
})
export class LifecyleChildComponent implements OnChanges,DoCheck,AfterContentInit{
  
  @Input() user:any={name:''};
  @Input() title: string;
  @ContentChild('childMessage') childMessage!:ElementRef;
  oldusername:string=this.user?.name;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called',changes);
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck called',this.oldusername);
    if(this.oldusername!=this.user?.name){
      console.log('Name is changed from',this.oldusername,'to',this.user?.name);
      this.oldusername=this.user?.name;
    }
    else{
      console.log('Name is not changed',this.oldusername);

    }
  } 
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called',this.childMessage);
  }

}
