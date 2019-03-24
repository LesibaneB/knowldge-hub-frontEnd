import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Question} from '../models/question';
import {Observable, of} from 'rxjs';
import {QuestionService} from '../services/question.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllQuestionsResolver implements Resolve<Array<Question>> {

  constructor(private readonly  _questionService: QuestionService) {
  }

  public resolve(): Observable<Array<Question>> {
    return this._questionService
      .getAllQuestions()
      .pipe(
        catchError(() => of([]))
      );
  }
}
