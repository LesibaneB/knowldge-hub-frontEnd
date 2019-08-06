import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Question} from '../models/question';

@Component({
  selector: 'app-question-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  public question: Question;

  constructor() {
  }

  public ngOnInit(): void {
    this.question.createdDate = moment(this.question.createdDate).format('LLLL');
    this.question.updatedDate = moment(this.question.updatedDate).format('LLLL');
  }

  public viewQuestion(): void {
    console.log('View question clicked');
  }

  public checkIfUpdated(): boolean {
    return moment(this.question.createdDate).isSame(this.question.updatedDate);
  }
}
