import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-profile-drop-down',
  standalone: true,
  imports: [DropdownMenuComponent],
  templateUrl: './profile-drop-down.component.html',
  styleUrl: './profile-drop-down.component.css'
})
export class ProfileDropDownComponent {

}
