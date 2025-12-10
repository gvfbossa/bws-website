import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private projects = [
    {
      title: 'Portal de Notícias',
      description: 'Um portal de notícias completo e gerenciável com anúncios',
      images: ['assets/images/portfolio-portal1.png', 'assets/images/portfolio-portal2.png', 'assets/images/portfolio-portal3.png', 'assets/images/portfolio-portal4.png'],
      url: 'https://portfolio.portal-noticias.bossawebsolutions.com.br/',
    },
    {
      title: 'Recebe Fácil',
      description: 'Cobranças Automáticas. Simples, Rápidas e Sem Dor de Cabeça.',
      images: ['assets/images/portfolio-recebefacil1.png', 'assets/images/portfolio-recebefacil2.png', 'assets/images/portfolio-recebefacil3.png', 'assets/images/portfolio-recebefacil4.png'],
      url: 'https://recebefacil.bossawebsolutions.com.br/',
    },
    /** 
    {
      title: 'Loja Virtual',
      description: 'Loja virtual para você entrar de vez no mundo online e expandir seu negócio',
      images: ['assets/images/portfolio-loja2.png', 'assets/images/portfolio-loja1.png', 'assets/images/portfolio-loja3.png', 'assets/images/portfolio-loja1.png'],
      url: 'https://gvfbossa.github.io/loja-virtual-fe/',
    },
    {
      title: 'Sistema de Cadastro',
      description: 'Sistema de Cadastro Completo para atender todas as suas necessidades',
      images: ['assets/images/portfolio-loja2.png', 'assets/images/portfolio-loja1.png', 'assets/images/portfolio-loja3.png', 'assets/images/portfolio-loja1.png'],
      url: 'https://gvfbossa.github.io/credito-centralconsig-fe/',
    }, **/
  ];

  getProjects() {
    return this.projects;
  }
}
