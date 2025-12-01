import { Component, signal } from '@angular/core';
import { CarouselCardProf } from '../carousel-card-prof/carousel-card-prof';

@Component({
  selector: 'app-carousel',
  imports: [CarouselCardProf],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  professores = signal([
    {
      nome: 'Tecnologia em Segurança Cibernética',
      profissao: '5 semestres',
      foto: '/cursos.png',
    },
    {
      nome: 'Tecnologia em Segurança Cibernética',
      profissao: '5 semestres',
      foto: '/cursos.png',
    },
    {
      nome: 'Tecnologia em Segurança Cibernética',
      profissao: '5 semestres',
      foto: '/cursos.png',
    },
    {
      nome: 'Tecnologia em Segurança Cibernética',
      profissao: '5 semestres',
      foto: '/cursos.png',
    },
    {
      nome: 'Tecnologia em Segurança Cibernética',
      profissao: '5 semestres',
      foto: '/cursos.png',
    },
    {
      nome: 'Tecnologia em Segurança Cibernética',
      profissao: '5 semestres',
      foto: '/cursos.png',
    },
    {
      nome: 'Tecnologia em Segurança Cibernética',
      profissao: '5 semestres',
      foto: '/cursos.png',
    },
  ]);

  scrollLeft() {
    const container = document.getElementById('carousel-container-courses');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const container = document.getElementById('carousel-container-courses');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
