import {AfterViewInit, Component, ElementRef, ViewEncapsulation} from '@angular/core';
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-slide-card',
  imports: [
    NgForOf
  ],
  templateUrl: './slide-card.component.html',
  styleUrl: './slide-card.component.css',
  encapsulation: ViewEncapsulation.None
})

export class SlideCardComponent implements AfterViewInit {
  dinamicTitle = 'Recomendações Para Você';

  moviesCard = [
    {title: 'Bad Boys II', image: 'edplus_img/bb2/bb2_card.png'},
    {title: 'O Protetor 2', image: 'edplus_img/opt/op2_card.png'},
    {title: 'Norbit', image: 'edplus_img/nbt/nbt_card.png'},
    {title: 'Chaplin', image: 'edplus_img/chp/chp_card.png'},
    {title: 'Chaves', image: 'edplus_img/chv/chv_card.png'},
    {title: 'Bad Boys II', image: 'edplus_img/bb2/bb2_card.png'},
    {title: 'O Protetor 2', image: 'edplus_img/opt/op2_card.png'},
    {title: 'Norbit', image: 'edplus_img/nbt/nbt_card.png'},
    {title: 'Chaplin', image: 'edplus_img/chp/chp_card.png'},
    {title: 'Chaves', image: 'edplus_img/chv/chv_card.png'}
  ];


  // constrói uma instância que permite acesso direto a elementos no DOM
  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const swiper_card = new Swiper('.card-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 20,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 8000,
        disableOnInteraction: false, // Não para permanentemente o autoplay
      },
      loop: false, // Removido loop para evitar comportamento inesperado
      speed: 1500,
      breakpoints: {
        374: {slidesPerView: 2},
        411: {slidesPerView: 2},
        576: {slidesPerView: 3},
        665: {slidesPerView: 6},
        683: {slidesPerView: 6},
        733: {slidesPerView: 6},
        735: {slidesPerView: 7},
        767: {slidesPerView: 3},
        992: {slidesPerView: 4},
        1023: {slidesPerView: 5},
        1200: {slidesPerView: 5},
        1400: {slidesPerView: 6},
      },
    });

    // Eventos para toque e mouse
    const swiperElement = this.elementRef.nativeElement.querySelector('.swiper');

    // Parar autoplay ao interagir
    swiper_card.on('touchStart', () => swiper_card.autoplay.stop());
    swiperElement.addEventListener('mouseenter', () => swiper_card.autoplay.stop());

    // Reiniciar autoplay ao terminar interação
    swiper_card.on('touchEnd', () => swiper_card.autoplay.start());
    swiperElement.addEventListener('mouseleave', () => swiper_card.autoplay.start());
  }

}
