import { Component } from '@angular/core';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxSmartModalModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public email: string = '';
  public form: FormGroup;

  constructor(public ngxSmartModalService: NgxSmartModalService, public fb: FormBuilder,
     public authenticationService: AuthenticationService, public router: Router) {
      // subscribe to the email event before setting its value in the form
      this.authenticationService.emailSubmitted.subscribe((email) => {
        this.email = email;
      });
      this.form = this.fb.group({
        emailField: [this.email],
        passwordField: ''
    })
  }

  public ngOnInit() {
  }

  public proceedLogin (password:string) {
    this.authenticationService.submitLogin(this.email, password).subscribe((response)=> {
      this.authenticationService.transaction = 'signin';
      this.closeOverlay();
      // this.router.navigate(['confirmation']);
    },(error) => {
      
    })
  }

  public redirectToForgotPassword() {
    //
  }

  public closeOverlay() {
    this.ngxSmartModalService.getModal('loginModal').close();
  }
}
