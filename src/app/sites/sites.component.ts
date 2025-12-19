import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sites.component.html',
})
export class SitesComponent {
  activeTab: 'websites' | 'identity' = 'websites';

  setTab(tab: 'websites' | 'identity') {
    this.activeTab = tab;
  }
}
