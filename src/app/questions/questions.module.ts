import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/list.component';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    ListComponent
  ]
})
export class QuestionsModule {
}
