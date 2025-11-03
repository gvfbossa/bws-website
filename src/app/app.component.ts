import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global { interface Window { dataLayer: any[]; gtag: (...args: any[]) => void; } }

@Component({
  selector: 'app-root',
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
