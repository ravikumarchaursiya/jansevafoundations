import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalEventsComponent } from './educational-events.component';

describe('EducationalEventsComponent', () => {
  let component: EducationalEventsComponent;
  let fixture: ComponentFixture<EducationalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
