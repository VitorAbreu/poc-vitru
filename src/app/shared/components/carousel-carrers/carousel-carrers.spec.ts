import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCarrers } from './carousel-carrers';

describe('CarouselCarrers', () => {
  let component: CarouselCarrers;
  let fixture: ComponentFixture<CarouselCarrers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCarrers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCarrers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
