import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwrenessComponentComponent } from './awreness-component.component';

describe('AwrenessComponentComponent', () => {
  let component: AwrenessComponentComponent;
  let fixture: ComponentFixture<AwrenessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwrenessComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwrenessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
