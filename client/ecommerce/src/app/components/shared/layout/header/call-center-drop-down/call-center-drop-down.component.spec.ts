import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterDropDownComponent } from './call-center-drop-down.component';

describe('CallCenterDropDownComponent', () => {
  let component: CallCenterDropDownComponent;
  let fixture: ComponentFixture<CallCenterDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallCenterDropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallCenterDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
