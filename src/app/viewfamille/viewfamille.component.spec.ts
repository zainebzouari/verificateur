import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFamilleComponent } from './viewfamille.component';

describe('ViewfamilleComponent', () => {
  let component: ViewFamilleComponent;
  let fixture: ComponentFixture<ViewFamilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFamilleComponent]
    });
    fixture = TestBed.createComponent(ViewFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
