import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoronamSliderComponent } from './poronam-slider.component';

describe('PoronamSliderComponent', () => {
  let component: PoronamSliderComponent;
  let fixture: ComponentFixture<PoronamSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoronamSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoronamSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
