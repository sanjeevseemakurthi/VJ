import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfinComponent } from './addfin.component';

describe('AddfinComponent', () => {
  let component: AddfinComponent;
  let fixture: ComponentFixture<AddfinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
