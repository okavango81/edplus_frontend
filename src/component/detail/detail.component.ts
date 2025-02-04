import {AfterViewInit, Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SlideCardComponent} from '../slide-card/slide-card.component';
import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

@Component({
  selector: 'app-detail',
  imports: [
    SlideCardComponent,
    NgForOf
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements AfterViewInit {
  dinamicTitle: string = "Você Também Pode Gostar";

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
    const swiper_detail = new Swiper('.detail-swiper', {
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
        665: {slidesPerView: 5},
        683: {slidesPerView: 4},
        734: {slidesPerView: 5},
        767: {slidesPerView: 3},
        992: {slidesPerView: 5},
        1023: {slidesPerView: 5},
        1200: {slidesPerView: 6},
        1400: {slidesPerView: 6}
      },
    });

    // Eventos para toque e mouse
    const swiperElement = this.elementRef.nativeElement.querySelector('.swiper');

    // Parar autoplay ao interagir
    swiper_detail.on('touchStart', () => swiper_detail.autoplay.stop());
    swiperElement.addEventListener('mouseenter', () => swiper_detail.autoplay.stop());

    // Reiniciar autoplay ao terminar interação
    swiper_detail.on('touchEnd', () => swiper_detail.autoplay.start());
    swiperElement.addEventListener('mouseleave', () => swiper_detail.autoplay.start());
  }
}
