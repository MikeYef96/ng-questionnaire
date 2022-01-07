import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateQuestionPageComponent } from './create-question-page.component';

@NgModule({
  declarations: [
    CreateQuestionPageComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CreateQuestionPageModule { }
