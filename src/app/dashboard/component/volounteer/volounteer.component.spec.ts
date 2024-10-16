import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolounteerComponent } from './volounteer.component';

describe('VolounteerComponent', () => {
  let component: VolounteerComponent;
  let fixture: ComponentFixture<VolounteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolounteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolounteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
