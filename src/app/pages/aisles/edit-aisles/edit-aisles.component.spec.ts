import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAislesComponent } from './edit-aisles.component';

describe('EditAislesComponent', () => {
  let component: EditAislesComponent;
  let fixture: ComponentFixture<EditAislesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAislesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAislesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
