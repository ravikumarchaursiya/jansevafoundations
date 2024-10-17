import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalEventComponent } from './educational-event.component';

describe('EducationalEventComponent', () => {
  let component: EducationalEventComponent;
  let fixture: ComponentFixture<EducationalEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
