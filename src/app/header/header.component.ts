import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      let yOffset = -180;
      
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
      this.closeMenu();
    }
  }

  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }
  
}
