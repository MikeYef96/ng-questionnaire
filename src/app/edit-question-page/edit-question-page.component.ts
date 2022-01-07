import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from '../shared/enums/question-type';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { IQuestion } from "../shared/interfaces/IQuestion";

@Component({
  selector: 'app-edit-question-page',
  templateUrl: './edit-question-page.component.html',
  styleUrls: ['./edit-question-page.component.scss']
})
export class EditQuestionPageComponent {
  questions: IQuestion[] = this.lsService.getItem('questions');
  question: IQuestion;

  constructor(
    private fb: FormBuilder,
    public lsService: LocalStorageService,
    private route: ActivatedRoute
  ) {
    this.question = this.questions.find(question => question.id === this.route.snapshot.params.id);
  }
}
