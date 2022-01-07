import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateQuestionPageModule } from './create-question-page/create-question-page.module';
import { EditQuestionPageModule } from './edit-question-page/edit-question-page.module';
import { ManagementPageModule } from './management-page/management-page.module';
import { QuestionListPageModule } from './question-list-page/question-list-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ManagementPageModule,
    EditQuestionPageModule,
    CreateQuestionPageModule,
    QuestionListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
