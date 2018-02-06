import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsFiltersComponent } from './stats-filters.component';

describe('StatsFiltersComponent', () => {
  let component: StatsFiltersComponent;
  let fixture: ComponentFixture<StatsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
