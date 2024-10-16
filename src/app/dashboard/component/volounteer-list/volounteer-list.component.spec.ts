import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolounteerListComponent } from './volounteer-list.component';

describe('VolounteerListComponent', () => {
  let component: VolounteerListComponent;
  let fixture: ComponentFixture<VolounteerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolounteerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolounteerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
