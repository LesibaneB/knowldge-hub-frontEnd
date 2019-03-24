import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AllQuestionsResolver} from './questions/resolvers/all-questions.resolver';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {questions: AllQuestionsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AllQuestionsResolver]
})
export class AppRoutingModule {
}
