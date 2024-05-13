import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordbyEmailComponent } from './forgot-password.component';

describe('ForgotPasswordbyEmailComponent', () => {
  let component: ForgotPasswordbyEmailComponent;
  let fixture: ComponentFixture<ForgotPasswordbyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordbyEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotPasswordbyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
