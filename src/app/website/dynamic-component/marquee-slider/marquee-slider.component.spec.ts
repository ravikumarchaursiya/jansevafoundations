import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeSliderComponent } from './marquee-slider.component';

describe('MarqueeSliderComponent', () => {
  let component: MarqueeSliderComponent;
  let fixture: ComponentFixture<MarqueeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
