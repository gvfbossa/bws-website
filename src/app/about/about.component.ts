import { Component, OnInit, Renderer2, ElementRef } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    const mainTopics = this.elRef.nativeElement.querySelectorAll('.about__main-topic')

    mainTopics.forEach((topic: HTMLElement) => {
      this.renderer.listen(topic, 'click', () => {
        // Close all other sublists
        mainTopics.forEach((otherTopic: HTMLElement) => {
          if (otherTopic !== topic) {
            const otherSublist = otherTopic.nextElementSibling as HTMLElement
            if (otherSublist && otherSublist.classList.contains('show')) {
              otherSublist.classList.remove('show')
              otherSublist.style.paddingLeft = '0' 
              
              const otherIcon = otherTopic.querySelector('.about__icon-style') as HTMLElement
              if (otherIcon) {
                otherIcon.classList.remove('expanded')
              }
            }
          }
        })
    
        // Toggle the clicked sublist
        const sublist = topic.nextElementSibling as HTMLElement
        if (sublist) {
          sublist.classList.toggle('show')
          if (sublist.classList.contains('show')) {
            sublist.style.paddingLeft = (topic.offsetWidth / 4) + 'px'
          } else {
            sublist.style.paddingLeft = '0' 
          }
        }
    
        const icon = topic.querySelector('.icon-style') as HTMLElement
        if (icon) {
          if (sublist && sublist.classList.contains('show')) {
            icon.classList.add('expanded')
          } else {
            icon.classList.remove('expanded')
          }
        }
      })
    })
  }
}
