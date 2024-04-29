import { Component } from '@angular/core';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxSmartModalModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form: FormGroup;

  constructor(public ngxSmartModalService: NgxSmartModalService, public fb: FormBuilder) {
    this.form = this.fb.group({
      emailField: '',
      passwordField: ''
    })
  }

  public ngOnInit() {
  }

  public proceedLogin (email: string, password:string) {
    //
  }

  public redirectToForgotPassword() {
    //
  }

  public closeOverlay() {
    this.ngxSmartModalService.getModal('loginModal').close();
  }
}
