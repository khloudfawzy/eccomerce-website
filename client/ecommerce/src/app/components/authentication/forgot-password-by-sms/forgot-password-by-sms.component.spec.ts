import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordBySmsComponent } from './forgot-password-by-sms.component';

describe('ForgotPasswordBySmsComponent', () => {
  let component: ForgotPasswordBySmsComponent;
  let fixture: ComponentFixture<ForgotPasswordBySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordBySmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotPasswordBySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
