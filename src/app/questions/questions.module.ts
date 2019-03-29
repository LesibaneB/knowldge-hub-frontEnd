import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/list.component';
import { ListHeaderComponent } from './list-header/list-header.component';

@NgModule({
  declarations: [ListComponent, ItemComponent, ListHeaderComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HttpClientModule
  ],
  exports: [
    ListComponent,
    ListHeaderComponent
  ]
})
export class QuestionsModule {
}
