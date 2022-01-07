import { Component } from '@angular/core';

import { LocalStorageService } from '../shared/services/local-storage.service';
import { IQuestion } from "../shared/interfaces/IQuestion";

@Component({
  selector: 'app-question-list-page',
  templateUrl: './question-list-page.component.html',
  styleUrls: ['./question-list-page.component.scss'],
})
export class QuestionListPageComponent {
  questions: IQuestion[] = this.lsService.getItem('questions');

  constructor(private lsService: LocalStorageService) { }

  updateQuestions(q: IQuestion): void {
    const index = this.questions.findIndex(question => question.id === q.id);
    this.questions[index] = q;
    this.questions = this.questions.sort((a, b) => new Date(b.answeredDate).getTime() - new Date(a.answeredDate).getTime());
    this.lsService.setItem('questions', this.questions);
  }
}
