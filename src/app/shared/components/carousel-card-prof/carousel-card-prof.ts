import { Component, input } from '@angular/core';
import { iProfessores } from '../../interfaces/professores.interface';

@Component({
  selector: 'app-carousel-card-prof',
  imports: [],
  templateUrl: './carousel-card-prof.html',
  styleUrl: './carousel-card-prof.scss',
})
export class CarouselCardProf {
  professor = input.required<iProfessores>();
}
