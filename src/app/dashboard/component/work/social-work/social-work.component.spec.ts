import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWorkComponent } from './social-work.component';

describe('SocialWorkComponent', () => {
  let component: SocialWorkComponent;
  let fixture: ComponentFixture<SocialWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
