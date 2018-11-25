import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAppComponent } from './help-app.component';

describe('HelpAppComponent', () => {
  let component: HelpAppComponent;
  let fixture: ComponentFixture<HelpAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
