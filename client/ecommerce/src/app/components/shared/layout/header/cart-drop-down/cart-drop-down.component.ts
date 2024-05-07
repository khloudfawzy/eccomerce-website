import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../dropdown-menu/dropdown-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-drop-down',
  standalone: true,
  imports: [DropdownMenuComponent, MatIconModule, CommonModule],
  templateUrl: './cart-drop-down.component.html',
  styleUrl: './cart-drop-down.component.css'
})
export class CartDropDownComponent {
  /** isCartEmpty */
  public isCartEmpty:boolean = true;

}
