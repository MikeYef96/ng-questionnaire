import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IQuestion } from "../../../shared/interfaces/IQuestion";

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent {
  @Input() question: IQuestion;

  @Output() delete = new EventEmitter<any>();

  constructor(private router: Router) { }

  editQuestion(): void {
    this.router.navigate(['../edit', this.question.id]);
  }

  deleteQuestion(): void {
    this.delete.emit();
  }
}
