import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid }  from 'uuid';

import { QuestionType } from '../../enums/question-type';
import { LocalStorageService } from '../../services/local-storage.service';
import { IQuestion } from "../../interfaces/IQuestion";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  @Input() mode = 'create';
  @Input() question;

  form = this.fb.group({
    title: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    answers: new FormArray([], (answers) => {
      return answers.value.length > 1 ? null : { error: true };
    }),
  })
  questionTypes = Object.keys(QuestionType);
  types = QuestionType;

  questions: IQuestion[] = this.lsService.getItem('questions') || [];

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private lsService: LocalStorageService,
    private router: Router
  ) {
    this.form.controls.type.valueChanges.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(() => {
      !this.hasAnswers ? this.answers.setErrors(null) : this.answers.updateValueAndValidity();
    });
  }

  ngOnInit(): void {
    if (this.question) {
      this.form.patchValue(this.question);
      this.question.answers.forEach(answer => this.addAnswerOption(answer) )
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  createQuestion(): void {
    this.lsService.setItem('questions', [
      ...this.questions,
      {
        ...this.form.getRawValue(),
        id: uuid(),
        creationDate: new Date(),
        answer: []
      }
    ]);
    this.router.navigate(['/management']);
  }

  updateQuestion(): void {
    const index = this.questions.findIndex(question => question.id === this.question.id);
    this.questions[index] = { ...this.question, ...this.form.getRawValue() }
    this.lsService.setItem('questions', this.questions);
    this.router.navigate(['/management']);
  }

  addAnswerOption(answer?: string): void {
    this.answers.push(new FormControl(answer || '', Validators.required));
  }

  get answers() {
    return this.form.controls["answers"] as FormArray;
  }

  get hasAnswers(): boolean {
    return this.form?.controls.type.value && this.form.controls.type.value !== this.types.Text;
  }
}
