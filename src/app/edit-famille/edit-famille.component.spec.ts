import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamilleComponent } from './edit-famille.component';

describe('EditFamilleComponent', () => {
  let component: EditFamilleComponent;
  let fixture: ComponentFixture<EditFamilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFamilleComponent]
    });
    fixture = TestBed.createComponent(EditFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
