import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  sobreposicao = input<boolean>(false);
  backgroundClass = input<string>();
  brand = input<'unicesumar' | 'uniasselvi'>('uniasselvi');
}
