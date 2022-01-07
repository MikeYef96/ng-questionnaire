import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { ManagementPageComponent } from './management-page.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';

@NgModule({
  declarations: [
    ManagementPageComponent,
    QuestionItemComponent
  ],
  exports: [
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule
  ]
})
export class ManagementPageModule { }
