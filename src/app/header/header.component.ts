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
  
      if (window.innerWidth <= 768) {
        yOffset = -300;
      }
  
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
  
      this.closeMenu();
    }
  }
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
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

  menuActive: boolean = false;

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
