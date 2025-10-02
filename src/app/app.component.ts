import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Garante que o TypeScript reconheça o gtag
declare global { interface Window { gtag?: (...args: any[]) => void } }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bws-website';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {

      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects,
          page_title: document.title,
          page_location: window.location.href
        });
      }

    });
  }
}
