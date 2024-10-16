import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerListComponent } from './doner-list.component';

describe('DonerListComponent', () => {
  let component: DonerListComponent;
  let fixture: ComponentFixture<DonerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
