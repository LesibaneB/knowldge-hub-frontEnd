import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Question} from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseURL = environment.baseURL;

  constructor(private readonly _http: HttpClient) {
  }

  public getAllQuestions(): Observable<Array<Question>> {
    const url = `${this.baseURL}/guest/question`;

    return this._http.get<Array<Question>>(url);
  }
}
