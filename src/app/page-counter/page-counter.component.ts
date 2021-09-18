import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.scss']
})
export class PageCounterComponent implements OnInit {

  noOFCounts = 0;
  constructor(private strgService: StorageServiceService) { }

  ngOnInit(): void {
    const noOfCount = this.strgService.getData('COUNT');
    if (noOfCount) {
      this.noOFCounts = Number(noOfCount);
    }
  }

  resetNoOfCount() {
    this.noOFCounts = 0;
    this.strgService.setData('COUNT', this.noOFCounts);
  }
  
  addNoOfCount() {
    ++this.noOFCounts;
    this.strgService.setData('COUNT', this.noOFCounts);
  }

}
