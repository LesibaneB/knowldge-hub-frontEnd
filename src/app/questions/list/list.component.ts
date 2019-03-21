import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Question} from '../models/question';
import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public questions: Array<Question> = [];
  public subscriptions: Array<Subscription> = [];
  public loading = false;

  constructor(private readonly  _questionService: QuestionService) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(this._questionService
      .getAllQuestions()
      .subscribe((questions: Array<Question>) => {
        this.questions = questions;
      }));
  }
}

