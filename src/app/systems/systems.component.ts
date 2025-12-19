import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-systems',
  standalone: true,
  templateUrl: './systems.component.html',
})
export class SystemsComponent implements OnInit, OnDestroy {
  words: string[] = [
    'Automatizando processos...',
    'Eliminando tarefas manuais...',
    'Transformando o complexo em simplicidade!',
  ]

  typedText = ''
  currentWord = 0
  charIndex = 0
  timeout: any

  ngOnInit(): void {
    this.type()
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout)
  }

  type(): void {
    if (this.charIndex < this.words[this.currentWord].length) {
      this.typedText += this.words[this.currentWord][this.charIndex]
      this.charIndex++
      this.timeout = setTimeout(() => this.type(), 80)
    } else {
      this.timeout = setTimeout(() => this.erase(), 1200)
    }
  }

  erase(): void {
    if (this.charIndex > 0) {
      this.typedText = this.typedText.slice(0, -1)
      this.charIndex--
      this.timeout = setTimeout(() => this.erase(), 40)
    } else {
      this.currentWord = (this.currentWord + 1) % this.words.length
      this.timeout = setTimeout(() => this.type(), 300)
    }
  }
}
