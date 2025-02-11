import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleParentComponent } from './lifecyle-parent.component';

describe('LifecyleParentComponent', () => {
  let component: LifecyleParentComponent;
  let fixture: ComponentFixture<LifecyleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyleParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
