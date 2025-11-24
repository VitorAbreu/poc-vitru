import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrers } from './card-carrers';

describe('CardCarrers', () => {
  let component: CardCarrers;
  let fixture: ComponentFixture<CardCarrers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarrers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarrers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
