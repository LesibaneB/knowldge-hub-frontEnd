import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/list.component';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HttpClientModule
  ],
  exports: [
    ListComponent
  ]
})
export class QuestionsModule {
}
