import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public search: Subject<string> = new Subject();

  constructor() {
  }
}
