import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { SharedModule } from '../authentication.module';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordBySmsComponent } from '../forgot-password-by-sms/forgot-password-by-sms.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule, MatIconModule, ForgotPasswordBySmsComponent, LoginComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordbyEmailComponent {
  public email: string ='';
  public form: FormGroup;
  constructor(public fb: FormBuilder,
    public authenticationService: AuthenticationService, public router: Router,
    public dialogRef: MatDialogRef<ForgotPasswordbyEmailComponent>, private dialogModel: MatDialog) {
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

 public redirectToSMSflow() {
  this.dialogRef.close();
  this.dialogModel.open(ForgotPasswordBySmsComponent);
 }

 public closeOverlay() {
   this.dialogRef.close();
   this.dialogModel.open(LoginComponent);
 }
}
