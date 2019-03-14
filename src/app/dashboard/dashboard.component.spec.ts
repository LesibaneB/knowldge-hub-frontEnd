import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HeaderComponent} from '../header/header.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {SearchService} from '../shared/services/search.service';
import {DashboardComponent} from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeaderComponent,
        SearchBarComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgZorroAntdModule
      ],
      providers: [SearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
