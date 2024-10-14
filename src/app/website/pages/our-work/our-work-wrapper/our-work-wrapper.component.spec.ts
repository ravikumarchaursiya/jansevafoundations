import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkWrapperComponent } from './our-work-wrapper.component';

describe('OurWorkWrapperComponent', () => {
  let component: OurWorkWrapperComponent;
  let fixture: ComponentFixture<OurWorkWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWorkWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorkWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
