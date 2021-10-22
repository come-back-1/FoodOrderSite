import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForrestaurantComponent } from './forrestaurant.component';

describe('ForrestaurantComponent', () => {
  let component: ForrestaurantComponent;
  let fixture: ComponentFixture<ForrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForrestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
