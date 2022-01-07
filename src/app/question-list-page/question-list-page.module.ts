import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { ManagementPageModule } from '../management-page/management-page.module';
import { SharedModule } from '../shared/shared.module';
import { QuestionListPageComponent } from './question-list-page.component';
import { QuestionListItemComponent } from './question-list-item/question-list-item.component';



@NgModule({
  declarations: [
    QuestionListPageComponent,
    QuestionListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ManagementPageModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class QuestionListPageModule { }
