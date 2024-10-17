import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalTrainingComponent } from './educational-training.component';

describe('EducationalTrainingComponent', () => {
  let component: EducationalTrainingComponent;
  let fixture: ComponentFixture<EducationalTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
