import {Component, OnInit} from '@angular/core';
import {SearchService} from '../shared/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private readonly _searchService: SearchService) {
  }

  public ngOnInit(): void {
    this._searchService.search.subscribe((value) => {
      console.log(value);
    });
  }

}
