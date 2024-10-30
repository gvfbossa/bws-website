import { Component } from '@angular/core'

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  img1Show = true
  img2Show = true
  img3Show = true

  constructor() {}

  toggleImg1() {
    this.img1Show = !this.img1Show
 }

 toggleImg2() {
  this.img2Show = !this.img2Show
}

toggleImg3() {
  this.img3Show = !this.img3Show
}

resetImgs() {
  this.toggleImg1()
  this.toggleImg2()
  this.toggleImg3()
}

}
