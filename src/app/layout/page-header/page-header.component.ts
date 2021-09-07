import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CSS_CONSTATNTS } from 'src/app/constants/css-constant';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnChanges {
  isDarkTheme = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.isDarkTheme && 
        changes.isDarkTheme.currentValue !== changes.isDarkTheme.previousValue && !changes.isDarkTheme.isFirstChange()) {
        this.changeColorCodes();
    }
  }

  ngOnInit(): void {
  }

  changeColorCodes() {
    const colors = this.isDarkTheme ? CSS_CONSTATNTS.DARK : CSS_CONSTATNTS.LIGHT; 
    document.documentElement.style.setProperty('--primary-color', colors.PRIMARY);
    document.documentElement.style.setProperty('--secondary-color', colors.SECONDARY);
    document.documentElement.style.setProperty('--font-color', colors.FONT);
    document.documentElement.style.setProperty('--nav-color', colors.NAV);
  }

}
