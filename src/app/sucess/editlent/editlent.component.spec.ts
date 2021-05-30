import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlentComponent } from './editlent.component';

describe('EditlentComponent', () => {
  let component: EditlentComponent;
  let fixture: ComponentFixture<EditlentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
