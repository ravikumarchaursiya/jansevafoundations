import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWrapperComponent } from './event-wrapper.component';

describe('EventWrapperComponent', () => {
  let component: EventWrapperComponent;
  let fixture: ComponentFixture<EventWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
