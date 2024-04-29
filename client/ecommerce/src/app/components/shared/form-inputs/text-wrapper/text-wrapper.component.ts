import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './text-wrapper.component.html',
  styleUrl: './text-wrapper.component.css'
})
export class TextWrapperComponent {
  /** placeholder */
  @Input() public placeholder: string = '';
  /** label */
  @Input() public label: string = '';
}
