import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Regex } from '../../shared/constants/regex-defines';
import { RegisterationComponent } from './registeration/registeration.component';

/** Authentication Component */
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoginComponent, RegisterationComponent
  ],
  providers: [AuthenticationService],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class authenticationComponent {
  public form: FormGroup;

  constructor(public ngxSmartModalService: NgxSmartModalService, public authenticationSerive: AuthenticationService, public fb: FormBuilder) {
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
          const nextStep = response.nextStep;
          this.authenticationSerive.emailSubmitted.emit(email);
          this.ngxSmartModalService.getModal(`${nextStep}Modal`).open();
      },(error: any) => {
        console.log(error);
      })
  }
}
