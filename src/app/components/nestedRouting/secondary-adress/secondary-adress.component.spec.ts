import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAdressComponent } from './secondary-adress.component';

describe('SecondaryAdressComponent', () => {
  let component: SecondaryAdressComponent;
  let fixture: ComponentFixture<SecondaryAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryAdressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
