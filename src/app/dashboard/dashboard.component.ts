import {Component, OnInit} from '@angular/core';
import {SearchService} from '../shared/services/search.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Question} from '../questions/models/question';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private subscription: Subscription;
  public questions: Array<Question> = [];

  constructor(private readonly _searchService: SearchService,
              private readonly _route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.subscription = this._searchService.search.subscribe((value) => {
      console.log(value);
    });

    this.questions = this._route.snapshot.data.questions as Array<Question>;
  }
}
