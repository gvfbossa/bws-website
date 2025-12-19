import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apps.component.html',
})
export class AppsComponent implements OnInit, OnDestroy {
  // BENEFÍCIOS
  benefits = [
    { title: 'Automatização', description: 'Tarefas concluídas em segundos' },
    { title: 'Conexão em tempo real', description: 'Equipe conectada a qualquer hora' },
    { title: 'Controle total', description: 'Acompanhe resultados na palma da mão' },
    { title: 'Simplicidade', description: 'Interface intuitiva para todos' },
  ];

  // IMAGENS FIXAS PARA CADA CARD
  images = [
    '/assets/images/app_app1_alt.png',
    '/assets/images/app_app2_alt.png',
    '/assets/images/app_app3_alt.png',
    '/assets/images/app_app1_alt.png', 
  ];

  // IMAGENS PRINCIPAIS DO MOCKUP
  altImages = [
    '/assets/images/app_app1.png',
    '/assets/images/app_app2.png',
    '/assets/images/app_app3.png',
    '/assets/images/app_app1.png',
  ];
  currentImageIndex = 0;
  currentImage = this.images[0];
  imageInterval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.imageInterval);
  }

  startCarousel() {
    this.imageInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 2500);
  }
}
