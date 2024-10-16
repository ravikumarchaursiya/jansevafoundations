import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWarapperComponent } from './dashboard-warapper.component';

describe('DashboardWarapperComponent', () => {
  let component: DashboardWarapperComponent;
  let fixture: ComponentFixture<DashboardWarapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWarapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWarapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
