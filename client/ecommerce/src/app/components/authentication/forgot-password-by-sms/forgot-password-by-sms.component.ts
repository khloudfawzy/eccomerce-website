import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { SharedModule } from '../authentication.module';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-by-sms',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './forgot-password-by-sms.component.html',
  styleUrl: './forgot-password-by-sms.component.css'
})
export class ForgotPasswordBySmsComponent {
  public email: string ='';
  public form: FormGroup;
  constructor(public fb: FormBuilder,
    public authenticationService: AuthenticationService, public router: Router,
    public dialogRef: MatDialogRef<ForgotPasswordBySmsComponent>) {
     // subscribe to the email event before setting its value in the form
     this.authenticationService.emailSubmitted.subscribe((email) => {
       this.email = email;
     });
     this.form = this.fb.group({
       emailField: [this.email],
   })
 }

 public ngOnInit() {
 }

 public submitForgotPassword (password:string) {
   
 }

  public redirectToEmailflow() {

  }

  public closeOverlay() {
   
    this.dialogRef.close();
  }

}
