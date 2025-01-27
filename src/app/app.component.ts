import {Component} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {NavbarComponent} from '../component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    NgClass,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'edplus-frontend';



}
