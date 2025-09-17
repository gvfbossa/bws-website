import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit, OnDestroy {

  @Input() project: any;

  images: string[] = [
    'assets/images/portfolio-portal1.png',
    'assets/images/portfolio-portal2.png',
    'assets/images/portfolio-portal3.png',
    'assets/images/portfolio-portal4.png'
  ];
  
  currentIndex: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  stopSlideshow() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  openPortfolioWebpage() {
    if (this.project?.url) {
      window.open(this.project.url, '_blank');
    }
  }

}
