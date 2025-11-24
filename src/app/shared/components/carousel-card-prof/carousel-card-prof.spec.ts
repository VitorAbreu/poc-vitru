import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardProf } from './carousel-card-prof';

describe('CarouselCardProf', () => {
  let component: CarouselCardProf;
  let fixture: ComponentFixture<CarouselCardProf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCardProf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCardProf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
