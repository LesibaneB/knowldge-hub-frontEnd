import {TestBed} from '@angular/core/testing';

import {AllQuestionsResolver} from './all-questions.resolver';
import {QuestionService} from '../services/question.service';
import SpyObj = jasmine.SpyObj;
import {spyOnClass} from '../../shared/test-utils/spy-on-class';
import {of} from 'rxjs';
import {Owner} from '../../shared/models/owner';
import {Question} from '../models/question';

describe('AllQuestionsResolver', () => {

  let service: AllQuestionsResolver;
  let questionService: QuestionService;
  let questionServiceSpy: SpyObj<QuestionService>;

  beforeEach(() => {
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
    questionServiceSpy = spyOnClass(QuestionService);
    questionServiceSpy.getAllQuestions.and.returnValue(of(questions));
    TestBed.configureTestingModule({
      providers: [
        AllQuestionsResolver,
        {
          provide: QuestionService,
          useValue: questionServiceSpy
        }
      ]
    });
    service = TestBed.get(AllQuestionsResolver);
    questionService = TestBed.get(QuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return questions from QuestionService when resolve is called',
    function (): void {
      service.resolve();
      expect(questionService.getAllQuestions).toHaveBeenCalled();
      questionService.getAllQuestions().subscribe((responseQuestions: Array<Question>) => {
        const questionsLength = 1;
        expect(responseQuestions.length).toBe(questionsLength);
      });
    });
});
