import {Component, OnInit} from '@angular/core';
import {Owner} from '../../shared/models/owner';
import {Question} from '../models/question';
import {RetrievalAnswer} from '../models/retrieval-answer';
import {RetrievalComment} from '../models/retrieval-comment';

@Component({
  selector: 'app-question-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public data: Array<Question> = [{
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
  public loading = false;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
