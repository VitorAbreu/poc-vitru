import { Component } from '@angular/core';
import { CardCarrers } from '../card-carrers/card-carrers';
import { iCardCarrer } from '../../interfaces/card-carrer.interface';

@Component({
  selector: 'app-carousel-carrers',
  imports: [CardCarrers],
  templateUrl: './carousel-carrers.html',
  styleUrl: './carousel-carrers.scss',
})
export class CarouselCarrers {
  items: iCardCarrer[] = [
    {
      course: 'string',
      imagePath: 'string',
    },
    {
      course: 'string',
      imagePath: 'string',
    },
    {
      course: 'string',
      imagePath: 'string',
    },
    {
      course: 'string',
      imagePath: 'string',
    },
    {
      course: 'string',
      imagePath: 'string',
    },
    {
      course: 'string',
      imagePath: 'string',
    },
    {
      course: 'string',
      imagePath: 'string',
    },
    {
      course: 'string',
      imagePath: 'string',
    },
  ];

  scrollLeft() {
    const container = document.getElementById('carouselContainer');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const container = document.getElementById('carouselContainer');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
