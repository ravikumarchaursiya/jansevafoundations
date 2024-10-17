import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCulturalWorkComponent } from './social-cultural-work.component';

describe('SocialCulturalWorkComponent', () => {
  let component: SocialCulturalWorkComponent;
  let fixture: ComponentFixture<SocialCulturalWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCulturalWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCulturalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
