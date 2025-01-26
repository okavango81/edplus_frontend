import {AfterViewInit, Component, ElementRef} from '@angular/core';
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-slide-card',
  imports: [],
  templateUrl: './slide-card.component.html',
  styleUrl: './slide-card.component.css'
})

export class SlideCardComponent implements AfterViewInit {


  // constrói uma instância que permite acesso direto a elementos no DOM
  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 36,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
        375: {slidesPerView: 2},
        412: {slidesPerView: 1},
        576: {slidesPerView: 2},
        667: {slidesPerView: 5},
        684: {slidesPerView: 4},
        734: {slidesPerView: 5},
        736: {slidesPerView: 5},
        768: {slidesPerView: 2},
        992: {slidesPerView: 3},
        1024: {slidesPerView: 4},
        1200: {slidesPerView: 4},
        1400: {slidesPerView: 6},
      },
    });

    // Eventos para toque e mouse
    const swiperElement = this.elementRef.nativeElement.querySelector('.swiper');

    // Parar autoplay ao interagir
    swiper.on('touchStart', () => swiper.autoplay.stop());
    swiperElement.addEventListener('mouseenter', () => swiper.autoplay.stop());

    // Reiniciar autoplay ao terminar interação
    swiper.on('touchEnd', () => swiper.autoplay.start());
    swiperElement.addEventListener('mouseleave', () => swiper.autoplay.start());
  }

}
