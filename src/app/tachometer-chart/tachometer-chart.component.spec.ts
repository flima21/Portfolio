import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachometerChartComponent } from './tachometer-chart.component';

describe('TachometerChartComponent', () => {
  let component: TachometerChartComponent;
  let fixture: ComponentFixture<TachometerChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TachometerChartComponent]
    });
    fixture = TestBed.createComponent(TachometerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
