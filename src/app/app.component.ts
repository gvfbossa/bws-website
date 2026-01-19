import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AboutComponent } from './about/about.component';
import { AppsComponent } from './apps/apps.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SitesComponent } from './sites/sites.component';
import { SystemsComponent } from './systems/systems.component';

declare global { interface Window { dataLayer: any[]; gtag: (...args: any[]) => void; } }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SitesComponent,
    SystemsComponent,
    AppsComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bws-website';

  constructor(private router: Router) {

    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-GV4Z5R4RVH';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-GV4Z5R4RVH', {
      cookie_flags: 'SameSite=None;Secure',
      cookie_domain: 'bossawebsolutions.com.br'
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      window.gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects,
        page_title: document.title,
        page_location: window.location.href
      });
    });

  }
}
