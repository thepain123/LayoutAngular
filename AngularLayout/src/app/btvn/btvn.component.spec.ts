import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTVNComponent } from './btvn.component';

describe('BTVNComponent', () => {
  let component: BTVNComponent;
  let fixture: ComponentFixture<BTVNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTVNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTVNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
