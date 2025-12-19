import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  currentIndex = 0;
  interval: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.startSlider();
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    }, 4000);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}
