import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [NgxSmartModalModule, ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  public form: FormGroup;

  constructor(public ngxSmartModalService: NgxSmartModalService, public fb: FormBuilder) {
    this.form = this.fb.group({
      emailField: '',
      passwordField: ''
    })
  }

  public proceedRegister(email: string, password: string){
    //
  }

  public closeOverlay() {
    this.ngxSmartModalService.getModal('loginModal').close();
  }
}
