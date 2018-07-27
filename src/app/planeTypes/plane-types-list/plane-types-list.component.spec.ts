import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTypesListComponent } from './plane-types-list.component';

describe('PlaneTypesListComponent', () => {
  let component: PlaneTypesListComponent;
  let fixture: ComponentFixture<PlaneTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
