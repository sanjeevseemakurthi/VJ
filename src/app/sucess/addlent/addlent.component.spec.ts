import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlentComponent } from './addlent.component';

describe('AddlentComponent', () => {
  let component: AddlentComponent;
  let fixture: ComponentFixture<AddlentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
