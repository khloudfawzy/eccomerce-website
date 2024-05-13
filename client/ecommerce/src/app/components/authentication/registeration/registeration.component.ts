import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../authentication.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule, MatIconModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  public email: string = '';
  public form: FormGroup;

  constructor(public fb: FormBuilder,
     public authenticationService: AuthenticationService, private router: Router,
     public dialogRef: MatDialogRef<RegisterationComponent>) {
      // subscribe to the email event before setting its value in the form
      this.authenticationService.emailSubmitted.subscribe((email) => {
        this.email = email;
      })
      this.form = this.fb.group({
        passwordField: ['', Validators.required],
        repeatPasswordField:['', [Validators.required]],
        fullName: ['', Validators.required],
      })
  }

  public passwordMatch(RepeatedPassword: FormControl) {
    const password: string = this.form.controls['passwordField'].value;
    return password === RepeatedPassword.value;
  }

  public proceedRegister(password: string, confirmPassword:string, fullName: string){
    this.authenticationService.submitRegister(this.email, password, confirmPassword, fullName).subscribe((response) => {
      this.authenticationService.transaction = 'register';
      this. closeOverlay();
      // this.router.navigate(['confirmation'], {relativeTo:});
    },(error) => {
      //try again
    })
  }

  public closeOverlay() {
    this.dialogRef.close();
  }
}
