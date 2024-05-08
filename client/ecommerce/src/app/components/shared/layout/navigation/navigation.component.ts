import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationTabl } from '../../../../shared/models/navigation-tab.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  public itemsList: NavigationTabl[] = [];
  @ViewChild('navigationTabs')
  public navigationTab!: ElementRef;

  public constructor( public changeDetector: ChangeDetectorRef){}

  public ngOnInit() {
    this.itemsList = [
      {
        title:'New Items',
        link: '#'
      },
      {
        title:'Sale',
        link: '#'
      },
      {
        title:'Women Clothing',
        link: '#'
      },
      {
        title:'Kids',
        link: '#'
      },
      {
        title:'Men clothing',
        link: '#'
      },
      {
        title:'Sleepwear',
        link: '#'
      },
      {
        title:'Bags',
        link: '#'
      },
      {
        title:'Accessories',
        link: '#'
      },
      {
        title:'Maternity',
        link: '#'
      },
      {
        title:'Sports',
        link: '#'
      },
      {
        title:'Home Appliances',
        link: '#'
      },
      {
        title:'Pets',
        link: '#'
      },
      {
        title:'kids Toys',
        link: '#'
      },
      {
        title:'plus size',
        link: '#'
      },
      {
        title:'Electronics',
        link: '#'
      },
      {
        title:'Office Supllies',
        link: '#'
      },
      {
        title:'Skin Care',
        link: '#'
      },
      {
        title:'Hair Care',
        link: '#'
      },
      {
        title:'Makeup',
        link: '#'
      }
    ]
  }

  public swipeLeft(){
    console.log(this.navigationTab.nativeElement)
    // this.navigationTab.nativeElement.scrollTo({ left: (this.navigationTab.nativeElement.scrollLeft + 350), behavior: 'smooth' })
    this.navigationTab.nativeElement.scrollLeft -= 350;
    this.changeDetector.detectChanges();
    console.log(this.navigationTab.nativeElement.scrollLeft)
  }

  public swipeRight(){
    this.navigationTab.nativeElement.scrollLeft += 350;
    console.log(this.navigationTab.nativeElement.scrollLeft)
    this.changeDetector.detectChanges();
  }

}
