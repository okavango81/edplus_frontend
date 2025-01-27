import {Component, ViewEncapsulation} from '@angular/core';
import {NavbarComponent} from '../component/navbar/navbar.component';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {BannerComponent} from '../component/banner/banner.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BannerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento
})
export class AppComponent {
  title = 'edplus-frontend';



}
