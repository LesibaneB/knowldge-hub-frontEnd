import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HeaderComponent} from '../header/header.component';
import {ItemComponent} from '../questions/item/item.component';
import {ListComponent} from '../questions/list/list.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {SearchService} from '../shared/services/search.service';
import {DashboardComponent} from './dashboard.component';
import {Owner} from '../shared/models/owner';
import {Question} from '../questions/models/question';
import {ActivatedRoute} from '@angular/router';
import {ListHeaderComponent} from '../questions/list-header/list-header.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debugElement: DebugElement;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeaderComponent,
        ListComponent,
        ItemComponent,
        SearchBarComponent,
        ListHeaderComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgZorroAntdModule,
        HttpClientTestingModule
      ],
      providers: [
        SearchService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                questions: questions
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ListHeaderComponent when there are questions ',
    function (): void {
      const listComponentRef = debugElement.query(By.directive(ListHeaderComponent));
      expect(listComponentRef).not.toBe(null);
    });

  it('should not show ListHeaderComponent when there are no questions ',
    function (): void {
      component.questions = [];
      fixture.detectChanges();
      const listComponentRef = debugElement.query(By.directive(ListHeaderComponent));
      expect(listComponentRef).toBe(null);
    });

  it('should show ListComponent',
    function (): void {
      const listComponentRef = debugElement.query(By.directive(ListComponent));
      expect(listComponentRef).not.toBe(null);
    });
});
