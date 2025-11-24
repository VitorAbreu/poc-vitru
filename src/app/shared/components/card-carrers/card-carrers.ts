import { Component, input } from '@angular/core';
import { iCardCarrer } from '../../interfaces/card-carrer.interface';

@Component({
  selector: 'app-card-carrers',
  imports: [],
  templateUrl: './card-carrers.html',
  styleUrl: './card-carrers.scss',
})
export class CardCarrers {
  card = input.required<iCardCarrer>();
}
