import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../authentication.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, SharedModule],
  // providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public email: string = '';
  public form: FormGroup;

  constructor(public fb: FormBuilder,
     public authenticationService: AuthenticationService, public router: Router,
     public dialogRef: MatDialogRef<LoginComponent>) {
      // subscribe to the email event before setting its value in the form
      this.authenticationService.emailSubmitted.subscribe((email) => {
        this.email = email;
      });
      this.form = this.fb.group({
        emailField: [this.email],
        passwordField: ['', [Validators.required]]
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
    
    this.dialogRef.close();
  }
}
