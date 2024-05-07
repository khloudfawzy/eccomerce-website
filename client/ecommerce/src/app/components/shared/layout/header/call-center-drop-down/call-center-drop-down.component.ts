import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../dropdown-menu/dropdown-menu.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-call-center-drop-down',
  standalone: true,
  imports: [DropdownMenuComponent, MatIconModule],
  templateUrl: './call-center-drop-down.component.html',
  styleUrl: './call-center-drop-down.component.css'
})
export class CallCenterDropDownComponent {

}
