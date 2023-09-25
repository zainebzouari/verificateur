import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDatepickerComponent } from './shared-datepicker.component';

describe('SharedDatepickerComponent', () => {
  let component: SharedDatepickerComponent;
  let fixture: ComponentFixture<SharedDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedDatepickerComponent]
    });
    fixture = TestBed.createComponent(SharedDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
