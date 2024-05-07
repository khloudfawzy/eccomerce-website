import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-languages-drop-down',
  standalone: true,
  imports: [DropdownMenuComponent],
  templateUrl: './languages-drop-down.component.html',
  styleUrl: './languages-drop-down.component.css'
})
export class LanguagesDropDownComponent {

}
