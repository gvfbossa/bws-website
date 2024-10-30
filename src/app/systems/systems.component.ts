import { Component, OnInit, OnDestroy,  } from '@angular/core'

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit, OnDestroy {
  words: string[] = [
    'Transforme o Complexo em Simplicidade',
  ]
  currentWordIndex: number = 0
  typingTimeout: any

  constructor() {}

  ngOnInit(): void {
    this.startTyping()
  }

  ngOnDestroy(): void {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout)
    }
  }

  startTyping(): void {
    this.typeWord()
  }

  typeWord(): void {
    const word = this.words[this.currentWordIndex]
    const wordLength = word.length
    let index = 0

    const typeNextCharacter = () => {
      if (index < wordLength) {
        try {
          document.getElementById('typedWord')!.textContent += word[index]
          index++
  
          this.typingTimeout = setTimeout(typeNextCharacter, 100)
        } catch (error) {}
      } else {

        clearTimeout(this.typingTimeout)
        this.typingTimeout = setTimeout(() => {
          this.clearWord()
        }, 1000)
      }
    }

    typeNextCharacter()
  }

  clearWord(): void {
    const word = this.words[this.currentWordIndex]
    let wordLength = word.length

    const clearNextCharacter = () => {
      if (wordLength > 0) {
        const typedWordElement = document.getElementById('typedWord')
        if (typedWordElement) {
          typedWordElement.textContent = typedWordElement.textContent!.slice(0, -1)
        }
        wordLength--
        this.typingTimeout = setTimeout(clearNextCharacter, 50)
      } else {
        clearTimeout(this.typingTimeout)
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length
        this.typingTimeout = setTimeout(() => {
          this.typeWord()
        }, 500)
      }
    }

    clearNextCharacter()
  }
}
