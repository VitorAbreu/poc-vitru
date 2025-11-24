import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from './shared/components/carousel/carousel';
import { Section } from './shared/components/section/section';
import { CarouselCarrers } from './shared/components/carousel-carrers/carousel-carrers';
import { ClassFree } from './shared/components/class-free/class-free';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carousel, Section, CarouselCarrers, ClassFree],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('poc-vitru-ds');
  // theme = signal<'light' | 'dark'>(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
  brand = signal<'uniasselvi' | 'unicesumar'>(
    localStorage.getItem('brand') === 'unicesumar' ? 'unicesumar' : 'uniasselvi'
  );

  constructor() {
    // effect(() => {
    //   const theme = this.theme();
    //   document.documentElement.setAttribute('data-theme', theme);
    //   localStorage.setItem('theme', theme);
    // });

    effect(() => {
      const brand = this.brand();
      document.documentElement.setAttribute('data-brand', brand);
      localStorage.setItem('brand', brand);
    });
  }

  // toggleTheme(): void {
  //   this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  // }

  toggleBrand(): void {
    this.brand.set(this.brand() === 'uniasselvi' ? 'unicesumar' : 'uniasselvi');
  }
}
