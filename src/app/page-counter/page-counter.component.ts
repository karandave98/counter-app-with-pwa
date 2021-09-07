import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.scss']
})
export class PageCounterComponent implements OnInit {

  noOFCounts = 0;
  constructor() { }

  ngOnInit(): void {
  }

  resetNoOfCount() {
    this.noOFCounts = 0;
  }

  addNoOfCount() {
    ++this.noOFCounts;
  }

}
