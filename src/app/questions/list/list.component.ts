import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  public questions: Array<Question> = [];
  public loading = false;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
