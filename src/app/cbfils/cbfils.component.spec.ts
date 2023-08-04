import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbfilsComponent } from './cbfils.component';

describe('CbfilsComponent', () => {
  let component: CbfilsComponent;
  let fixture: ComponentFixture<CbfilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CbfilsComponent]
    });
    fixture = TestBed.createComponent(CbfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
