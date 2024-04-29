import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {
  /**
   * 
   * @param ngxSmartModalService 
   */
  constructor(public ngxSmartModalService: NgxSmartModalService) {

  }

  public closeOverlay() {
    this.ngxSmartModalService.getModal('loginModal').close();
  }
}
