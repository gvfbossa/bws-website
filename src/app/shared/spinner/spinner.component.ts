import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatProgressSpinner, MatSpinner } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    MatProgressSpinner,
    CommonModule
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  @Input() isLoading = false
}
