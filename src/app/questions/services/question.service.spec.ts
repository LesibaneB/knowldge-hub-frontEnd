import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {Owner} from '../../shared/models/owner';
import {Question} from '../models/question';
import {QuestionService} from './question.service';

describe('QuestionService', () => {
  let questionService: QuestionService;
  let httpMock: HttpTestingController;
  const baseURL = environment.baseURL;
  const questions = [{
    _id: '5c8566d49fb8f43211d66ce8',
    description: 'Debugging java',
    content: 'Content Here',
    tags: [
      'Java',
      'Debugging'
    ],
    votes: 0,
    views: 0,
    owner: {
      _id: 1,
      name: 'Bonakele',
      lastName: 'Lesibane',
      username: 'Bongs'
    } as Owner,
    answers: [],
    comments: [],
    createdDate: '2019-03-10T19:34:44.744Z',
    updatedDate: '2019-03-10T19:34:44.744Z',
  } as Question];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuestionService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    questionService = TestBed.get(QuestionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(questionService).toBeTruthy();
  });

  it('should call the correct HTTP method with the correct', fakeAsync(() => {
    questionService.getAllQuestions().subscribe((responseQuestions) => {
      expect(responseQuestions).toBe(questions);
    });
    tick();
    const req = httpMock.expectOne(`${baseURL}/guest/question`);
    expect(req.request.method).toBe('GET');
    req.flush(questions);
    httpMock.verify();
  }));
});
