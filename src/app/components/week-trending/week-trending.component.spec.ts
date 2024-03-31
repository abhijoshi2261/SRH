import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTrendingComponent } from './week-trending.component';

describe('WeekTrendingComponent', () => {
  let component: WeekTrendingComponent;
  let fixture: ComponentFixture<WeekTrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekTrendingComponent]
    });
    fixture = TestBed.createComponent(WeekTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
