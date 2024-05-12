import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TextWrapperComponent } from './form-inputs/text-wrapper/text-wrapper.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TextWrapperComponent, NavigationComponent, LoadingSpinnerComponent],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {

}
