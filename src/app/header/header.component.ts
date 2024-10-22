import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerHeight: number = 0;
  componentPositions: { [key: string]: number } = {};
  menuActive: boolean = false;

  constructor() {}

  measureComponents(): void {
    const header = document.getElementById('header');
    this.headerHeight = header ? header.offsetHeight : 0;
    
    const components = ['about', 'sites', 'systems', 'apps', 'contact', 'footer'];
    
    components.forEach(id => {
      const element = document.getElementById(id);
      if (element && element.offsetParent !== null) {
        let offsetTop = element.getBoundingClientRect().top + window.scrollY;

        if (window.innerWidth > 768) {
          if (id === 'contact') {
            offsetTop += 100
          }
          else if (id === 'apps') {
            offsetTop -= 10
          }
        }

        this.componentPositions[id] = offsetTop;
      }
    });
  }
  
  scrollTo(sectionId: string): void {
    let elementPosition = this.componentPositions[sectionId] - this.headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });

    this.closeMenu();
  }  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.measureComponents();
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('header--sticky');
        header.style.position = 'fixed';    
      } else {
        header.classList.remove('header--sticky');
        header.style.position = 'relative';
      }
    }
  }
  
  //TODO - borda de cor diferente no logo, para aparecer mais quando as palavras estiverem em cima dos ladrilhos
  //TODO - imagens - mexer nos tamanhos dos arquivos para carregamento mais rápido
  //TODO - ao clicar no link do email, não está preenchendo o e-mail do bossa.....
  //TODO - Deploy do Backend para enviar os emails

  //TODO - cartão/flyer redes sociais - cartão terá QR code que leva o usuario direto pro WhatsApp
  
  //TODO - V2 - demonstrar ao usuário a interatividade com o site por meio de efeitos que o leve a clicar nas coisas
  //TODO - V2 - Criar área do cliente para o mesmo interagir com pagamentos, status de seus pedidos, etc
  //TODO - V2 - Criar app baseado no site em flutter para demonstração
  //TODO - V2 - Criar seção de portfolio

  toggleMenu() {
    this.menuActive = !this.menuActive;
    const navbarLinks = document.querySelector('.header__navbar-links');
    if (navbarLinks) {
      if (this.menuActive) {
        navbarLinks.classList.add('header__navbar-links--active');
      } else {
        navbarLinks.classList.remove('header__navbar-links--active');
        !this.menuActive
      }
    }
  }

  closeMenu() {
    this.menuActive = false;
    const navbarLinks = document.querySelector('.header__navbar-links');
    if (navbarLinks) {
      navbarLinks.classList.remove('header__navbar-links--active');
    }
  }
}
