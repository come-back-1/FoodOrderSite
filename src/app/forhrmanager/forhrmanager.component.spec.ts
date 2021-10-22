import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForhrmanagerComponent } from './forhrmanager.component';

describe('ForhrmanagerComponent', () => {
  let component: ForhrmanagerComponent;
  let fixture: ComponentFixture<ForhrmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForhrmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForhrmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
