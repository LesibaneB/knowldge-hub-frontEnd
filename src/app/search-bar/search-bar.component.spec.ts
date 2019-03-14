import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SearchService} from '../shared/services/search.service';
import {SearchBarComponent} from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let debugElement: DebugElement;
  let searchServiceInstance: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
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
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    searchServiceInstance = debugElement.injector.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function setupSpies(): void {
    spyOn(component, 'search').and.callThrough();
    spyOn(searchServiceInstance.search, 'next');
  }

  it('should successfully call  search when form is submitted', function (): void {
    const formElement: DebugElement = debugElement.query(By.css('form'));
    setupSpies();
    component.form.controls['searchTerm'].setValue('Java');
    formElement.triggerEventHandler('ngSubmit', null);
    expect(component.search).toHaveBeenCalled();
    expect(searchServiceInstance.search.next).toHaveBeenCalledWith('Java');
  });

  it('should call  search with failure when form is submitted and input has no value', function (): void {
    const formElement: DebugElement = debugElement.query(By.css('form'));
    component.form.controls['searchTerm'].setValue(undefined);
    setupSpies();
    formElement.triggerEventHandler('ngSubmit', null);
    expect(component.search).toHaveBeenCalled();
    expect(searchServiceInstance.search.next).toHaveBeenCalledTimes(0);
  });
});
