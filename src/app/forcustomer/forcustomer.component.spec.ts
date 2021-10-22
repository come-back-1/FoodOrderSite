import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForcustomerComponent } from './forcustomer.component';

describe('ForcustomerComponent', () => {
  let component: ForcustomerComponent;
  let fixture: ComponentFixture<ForcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
