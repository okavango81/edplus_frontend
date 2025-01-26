import { Component } from '@angular/core';
import {SlideCardComponent} from '../component/slide-card/slide-card.component';

@Component({
  selector: 'app-root',
  imports: [SlideCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'edplus-frontend';
}
