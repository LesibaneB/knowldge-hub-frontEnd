import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {Owner} from '../../shared/models/owner';
import {Question} from '../models/question';
import {ItemComponent} from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [NgZorroAntdModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.question = {
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
    } as Question;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call viewQuestion() when the description is clicked', function (): void {
    const descriptionLink = debugElement.query(By.css('a'));
    spyOn(component, 'viewQuestion');
    descriptionLink.nativeElement.click();
    expect(component.viewQuestion).toHaveBeenCalled();
  });
});
