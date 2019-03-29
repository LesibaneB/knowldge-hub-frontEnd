import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {QuestionsModule} from './questions/questions.module';
import {SearchBarComponent} from './search-bar/search-bar.component';
import { HeaderStickyDirective } from './directives/header-sticky.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SearchBarComponent,
    HeaderStickyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    QuestionsModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
