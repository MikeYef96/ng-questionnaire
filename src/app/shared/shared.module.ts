import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CreateQuestionComponent } from "./components/create-question/create-question.component";

@NgModule({
  declarations: [
    PageHeaderComponent,
    CreateQuestionComponent,
  ],
  exports: [
    PageHeaderComponent,
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class SharedModule { }
