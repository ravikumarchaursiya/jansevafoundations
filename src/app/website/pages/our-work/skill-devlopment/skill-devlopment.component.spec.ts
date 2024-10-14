import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDevlopmentComponent } from './skill-devlopment.component';

describe('SkillDevlopmentComponent', () => {
  let component: SkillDevlopmentComponent;
  let fixture: ComponentFixture<SkillDevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
