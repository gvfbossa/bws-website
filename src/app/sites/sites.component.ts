import { Component } from '@angular/core'

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {

  showWebsitesContent = false
  showIdentityContent = true 

  toggleWebsitesContent() {
    this.showWebsitesContent = !this.showWebsitesContent
    this.showIdentityContent = false
  }

  toggleIdentityContent() {
    this.showIdentityContent = !this.showIdentityContent
    this.showWebsitesContent = false
  }

  toggleOffContents() {
    this.showWebsitesContent = false
    this.showIdentityContent = false
  }

  validateIfContents() {
    if (!this.showWebsitesContent && !this.showIdentityContent)
      return true
    return false
  }

}