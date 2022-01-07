import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';
import { EditQuestionPageComponent } from './edit-question-page/edit-question-page.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import { QuestionListPageComponent } from './question-list-page/question-list-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/management'
  },
  {
    path: 'management',
    component: ManagementPageComponent
  },
  {
    path: 'edit/:id',
    component: EditQuestionPageComponent
  },
  {
    path: 'create',
    component: CreateQuestionPageComponent
  },
  {
    path: 'list',
    component: QuestionListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
