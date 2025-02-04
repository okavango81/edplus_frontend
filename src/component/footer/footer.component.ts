import {Component, HostListener} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  // Variável para controlar a visibilidade do botão
  showScrollButton: boolean = false;

  // Listener para detectar o evento de rolagem
  @HostListener('window:scroll', [])

  onWindowScroll() {
    // Mostrar o botão quando a página for rolada além de 100px
    if (window.scrollY > 600) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  // Função para rolar a página de volta ao topo
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
    });
  }

}
