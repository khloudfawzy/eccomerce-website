import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationTab } from '../../../../shared/models/navigation-tab.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  public itemsList: NavigationTab[] = [];
  @ViewChild('navigationTabs')
  public navigationTab!: ElementRef;

  public constructor(public scroller: ViewportScroller){}

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
    this.navigationTab.nativeElement.scrollBy({
      left: -350,
    });
  } 

  public swipeRight(){
    this.navigationTab.nativeElement.scrollBy({
      left: 350,
    });
  }
}
