import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfinComponent } from './editfin.component';

describe('EditfinComponent', () => {
  let component: EditfinComponent;
  let fixture: ComponentFixture<EditfinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
