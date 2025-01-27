import {AfterViewInit, Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {NgForOf} from '@angular/common';
import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-banner',
  imports: [NgForOf],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento
})
export class BannerComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {
  }

  movies = [
    {title: 'Bad Boys II', image: 'edplus_img/bb2/bb2_main.jpg'},
    {title: 'O Protetor 2', image: 'edplus_img/opt/op2_main.jpg'},
    {title: 'Norbit', image: 'edplus_img/nbt/nbt_main.jpg'},
    {title: 'Chaplin', image: 'edplus_img/chp/chp_card.png'}
  ];

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false, // Não para permanentemente o autoplay
      },
      loop: false, // Removido loop para evitar comportamento inesperado
      speed: 2000,
      breakpoints: {
        375: {slidesPerView: 1},
        412: {slidesPerView: 1},
        576: {slidesPerView: 1},
        667: {slidesPerView: 1},
        684: {slidesPerView: 1},
        734: {slidesPerView: 1},
        736: {slidesPerView: 1},
        768: {slidesPerView: 1},
        992: {slidesPerView: 1},
        1024: {slidesPerView: 1},
        1200: {slidesPerView: 1},
        1400: {slidesPerView: 1},
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
