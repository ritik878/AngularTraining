import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleChildComponent } from './lifecyle-child.component';

describe('LifecyleChildComponent', () => {
  let component: LifecyleChildComponent;
  let fixture: ComponentFixture<LifecyleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyleChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
