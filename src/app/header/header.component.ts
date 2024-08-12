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
      let yOffset = -180; // Default offset for desktop
  
      // Adjust the offset for mobile view
      if (window.innerWidth <= 768) {
        yOffset = -300; // You can adjust this value to match your header's height on mobile
      }
  
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
  
      this.closeMenu();
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
    }
  }

  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks) {
      if (this.menuActive) {
        navbarLinks.classList.add('active');
      } else {
        navbarLinks.classList.remove('active');
        !this.menuActive
      }
    }
  }

  closeMenu() {
    this.menuActive = false;
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks) {
      navbarLinks.classList.remove('active');
    }
  }
}
