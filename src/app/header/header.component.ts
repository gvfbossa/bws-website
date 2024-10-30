import { Component, HostListener, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerHeight: number = 0
  componentPositions: { [key: string]: number } = {}
  menuActive: boolean = false

  constructor() {}

  ngOnInit() {
    this.simulateStickyHeader()
  }

  simulateStickyHeader(): void {
    const header = document.getElementById('header')

    if (header) {
      header.style.opacity = '0'
      header.style.position = 'fixed'
      header.style.top = '0'
      header.classList.add('header--sticky')
    }

    setTimeout(() => {
      this.measureComponents()
      
      if (header) {
        header.style.position = ''
        header.style.top = ''
        header.classList.remove('header--sticky')
        setTimeout(() => {
          header.style.opacity = '1'
        }, 300)
      }
    }, 0)
  }

  measureComponents(): void {
    const header = document.getElementById('header')
    this.headerHeight = header ? header.offsetHeight : 0
    
    const components = ['about', 'sites', 'systems', 'apps', 'contact', 'footer']
    
    components.forEach(id => {
      const element = document.getElementById(id)
      if (element && element.offsetParent !== null) {
        let offsetTop = element.getBoundingClientRect().top + window.scrollY

        if (window.innerWidth > 768) {
          if (id === 'contact') {
            offsetTop += 100
          }
          else if (id === 'apps') {
            offsetTop -= 10
          }
        }

        this.componentPositions[id] = offsetTop
      }
    })
  }
  
  scrollTo(sectionId: string): void {
    let elementPosition = this.componentPositions[sectionId] - this.headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })

    this.closeMenu()
  }  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.measureComponents()
    const header = document.getElementById('header')
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('header--sticky')
        header.style.position = 'fixed'    
      } else {
        header.classList.remove('header--sticky')
        header.style.position = 'relative'
      }
    }
  }

  toggleMenu() {
    this.menuActive = !this.menuActive
    const navbarLinks = document.querySelector('.header__navbar-links')
    if (navbarLinks) {
      if (this.menuActive) {
        navbarLinks.classList.add('header__navbar-links--active')
      } else {
        navbarLinks.classList.remove('header__navbar-links--active')
        !this.menuActive
      }
    }
  }

  closeMenu() {
    this.menuActive = false
    const navbarLinks = document.querySelector('.header__navbar-links')
    if (navbarLinks) {
      navbarLinks.classList.remove('header__navbar-links--active')
    }
  }
}
