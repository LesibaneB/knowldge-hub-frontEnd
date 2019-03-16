import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ItemComponent} from '../item/item.component';
import {ListComponent} from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        ItemComponent
      ],
      imports: [NgZorroAntdModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
