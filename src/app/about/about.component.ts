import { Component, OnInit, Renderer2, ElementRef } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIconModule, 
    CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  topics = [
    { name: 'Sites', expanded: false, items: ['Portfólios', 'Empresas', 'Landing Pages', 'Portais de Notícias', 'Blogs'] },
    { name: 'Sistemas', expanded: false, items: ['E-Commerce', 'Cadastros', 'Relatórios', 'Fluxo de Caixa', 'Controle de Estoque'] },
    { name: 'Apps', expanded: false, items: ['Lojas', 'Delivery', 'Mensagens', 'Produtividade', 'Entretenimento'] },
  ];

  toggleTopic(topic: any) {
    this.topics.forEach(t => {
      if (t !== topic) t.expanded = false;
    });
    topic.expanded = !topic.expanded;
  }

  animatedWords = ['TECNOLOGIA', 'INTELIGÊNCIA', 'ESTRATÉGIA', 'CIÊNCIA'];
  currentWordIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.animatedWords.length;
    }, 2000); // troca a cada 2s
  }
}
