import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    const mainTopics = this.elRef.nativeElement.querySelectorAll('.main-topic');

    mainTopics.forEach((topic: HTMLElement) => {
      this.renderer.listen(topic, 'click', () => {
        const sublist = topic.nextElementSibling as HTMLElement;
        if (sublist) {
          sublist.classList.toggle('show');
          if (sublist.classList.contains('show')) {
            sublist.style.paddingLeft = (topic.offsetWidth / 4) + 'px';
          } else {
            sublist.style.paddingLeft = '0'; 
          }
        }
        const icon = topic.querySelector('.icon-style') as HTMLElement;
        if (sublist) {
          if (sublist.classList.contains('show')) {
            icon.classList.add('expanded');
          } else {
            icon.classList.remove('expanded');
          }
        }
      });
    });
  }
}
