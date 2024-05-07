import { Component, EventEmitter, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProfileDropDownComponent } from './profile-drop-down/profile-drop-down.component';
import { CartDropDownComponent } from './cart-drop-down/cart-drop-down.component';
import { CallCenterDropDownComponent } from './call-center-drop-down/call-center-drop-down.component';
import { LanguagesDropDownComponent } from './languages-drop-down/languages-drop-down.component';
import { indexSignatureModel } from '../../../../shared/models/index-signature.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,MatIconModule, ProfileDropDownComponent, CartDropDownComponent, CallCenterDropDownComponent, LanguagesDropDownComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  public activeNav: string = '';
  public isHidden: indexSignatureModel = {
    profile: false,
    cart: false,
    callCenter: false,
    language: false
  }

  // @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent){
  //   const target = event?.target as HTMLElement;
  //   this.prepareNavigationBar(target, 'mouseenter');
    
  // } 

  // @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent){
  //   const target = event?.target as HTMLElement;
  //   this.prepareNavigationBar(target, 'mouseleave');
  // } 

  /**
   * first closes what navigation bar was already open
   * prepare the nav option that needs to be active
   * sets the active nav to the clicked upon option
   */
  public prepareNavigationBar(event: MouseEvent) {
    this.isHidden[this.activeNav] = false;

    const target = event?.target as HTMLElement;
    const className: string = target.classList.value;
    const property: string = className.slice(className.indexOf(' ')).trim();
    this.isHidden[property] = !this.isHidden[property];

    this.activeNav = this.isHidden[property] ? property : '';
  }

}
