import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-page.component.html',
  styleUrl: './confirmation-page.component.css'
})
export class ConfirmationPageComponent implements OnInit {
  /** transaction */
  public transaction: string = '';

  public constructor(public authenticationService: AuthenticationService){

  }
  /**ngOnInit */
  public ngOnInit(): void{
    this.transaction = this.authenticationService.transaction;
  }

}
