import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchService} from '../shared/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly _searchService: SearchService,
              private readonly _formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.form = this._formBuilder.group({searchTerm: ['']});
  }

  public search(): void {
    const searchValue = this.form.controls['searchTerm'].value;
    if (searchValue) {
      this._searchService.search.next(searchValue);
    }
  }
}
