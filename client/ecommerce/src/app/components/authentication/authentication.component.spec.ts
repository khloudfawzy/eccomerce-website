import { ComponentFixture, TestBed } from '@angular/core/testing';

import { authenticationComponent } from './authentication.component';

describe('authenticationComponent', () => {
  let component: authenticationComponent;
  let fixture: ComponentFixture<authenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [authenticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(authenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
