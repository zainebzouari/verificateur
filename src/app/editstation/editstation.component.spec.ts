import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstationComponent } from './editstation.component';

describe('EditstationComponent', () => {
  let component: EditstationComponent;
  let fixture: ComponentFixture<EditstationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditstationComponent]
    });
    fixture = TestBed.createComponent(EditstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
