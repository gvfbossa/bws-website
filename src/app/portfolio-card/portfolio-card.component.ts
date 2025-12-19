import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {
  @Input() project: any;
  @Input() active: boolean = false;

  openPortfolioWebpage() {
    if (this.project?.url) {
      window.open(this.project.url, '_blank');
    }
  }
}
