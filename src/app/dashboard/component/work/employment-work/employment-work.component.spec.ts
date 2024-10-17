import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentWorkComponent } from './employment-work.component';

describe('EmploymentWorkComponent', () => {
  let component: EmploymentWorkComponent;
  let fixture: ComponentFixture<EmploymentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
