import {Component, ViewEncapsulation} from '@angular/core';
import {NavbarComponent} from '../component/navbar/navbar.component';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {BannerComponent} from '../component/banner/banner.component';
import {SlideCardComponent} from '../component/slide-card/slide-card.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BannerComponent,
    SlideCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento
})
export class AppComponent {
  title = 'edplus-frontend';



}
