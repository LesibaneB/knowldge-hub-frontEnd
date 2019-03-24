import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {NgZorroAntdModule, NzEmptyComponent} from 'ng-zorro-antd';
import {Owner} from '../../shared/models/owner';
import {ItemComponent} from '../item/item.component';
import {Question} from '../models/question';
import {ListComponent} from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
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
        ListComponent,
        ItemComponent
      ],
      imports: [
        NgZorroAntdModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.questions = questions;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show no data when no questions exist', function (): void {
    component.questions = [];
    fixture.detectChanges();
    const noDataDirective = debugElement.query(By.directive(NzEmptyComponent));
    console.log(noDataDirective);
    expect(noDataDirective).not.toBe(null);
  });

  it('should not show "no data" Directive when questions exist', function (): void {
    const noDataDirective = debugElement.query(By.directive(NzEmptyComponent));
    expect(noDataDirective).toBe(null);
  });
});
