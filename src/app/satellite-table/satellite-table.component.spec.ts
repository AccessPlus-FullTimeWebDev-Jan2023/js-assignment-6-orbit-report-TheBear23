import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteTableComponent } from './satellite-table.component';

describe('SatelliteTableComponent', () => {
  let component: SatelliteTableComponent;
  let fixture: ComponentFixture<SatelliteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
