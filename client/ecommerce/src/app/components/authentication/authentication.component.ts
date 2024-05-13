import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Regex } from '../../shared/constants/regex-defines';
import { RegisterationComponent } from './registeration/registeration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from './authentication.module';

/** Authentication Component */
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,SharedModule, LoginComponent, RegisterationComponent, MatDialogModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class authenticationComponent {
  /** form */
  public form: FormGroup;

  constructor( public authenticationSerive: AuthenticationService, public fb: FormBuilder, private dialogModel: MatDialog) {
    const emailRegex = Regex.email;

    this.form = this.fb.group({
       emailField: ['', [Validators.required, Validators.pattern(emailRegex)]],
     })
  }

  public ngOnInit() {
  }

  public submitEmail(email: string){
    this.authenticationSerive.findEmail(email)
      .subscribe((response: any) => {
          this.authenticationSerive.emailSubmitted.emit(email);
          console.log('auth', email)

          if(response.nextStep === 'login')
            {
              this.dialogModel.open(LoginComponent);
            } else {
              this.dialogModel.open(RegisterationComponent);
            }
      },(error: any) => {
        console.log(error);
      })
  }
}
