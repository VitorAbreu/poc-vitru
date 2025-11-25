import { Component } from '@angular/core';
import { iClassFreeItens } from '../../interfaces/class-free-itens.interface';

@Component({
  selector: 'app-class-free',
  imports: [],
  templateUrl: './class-free.html',
  styleUrl: './class-free.scss',
})
export class ClassFree {
  classFreeItens: iClassFreeItens[] = [
    {
      icon: '/icons/direction.svg',
      title: 'Main Label',
      text: 'Escolha quando e onde estudar, com total liberdade de horários.'
    },
    {
      icon: '/icons/direction.svg',
      title: 'Estrutura',
      text: 'Ambientes preparados para seu desenvolvimento profissional.'
    },
    {
      icon: '/icons/direction.svg',
      title: 'Gestão da carreira',
      text: 'Ambientes preparados para seu desenvolvimento profissional.'
    },
    {
      icon: '/icons/direction.svg',
      title: 'Estudo garantido',
      text: 'Ambientes preparados para seu desenvolvimento profissional.'
    }
  ]
}
