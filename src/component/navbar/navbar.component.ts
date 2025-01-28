import {Component, HostListener} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolled = false;


  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    // Verifica se a rolagem ultrapassa 300px
    this.isScrolled = window.scrollY > 300;
    console.log(window.scrollY);
  }
}
