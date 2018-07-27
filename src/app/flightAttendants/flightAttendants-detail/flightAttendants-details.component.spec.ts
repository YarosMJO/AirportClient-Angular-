import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAttendantDetailsComponent } from './flightAttendants-details.component';

describe('FlightAttendantDetailsComponent', () => {
  let component: FlightAttendantDetailsComponent;
  let fixture: ComponentFixture<FlightAttendantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightAttendantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAttendantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
