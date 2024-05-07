import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesDropDownComponent } from './languages-drop-down.component';

describe('LanguagesDropDownComponent', () => {
  let component: LanguagesDropDownComponent;
  let fixture: ComponentFixture<LanguagesDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesDropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagesDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
