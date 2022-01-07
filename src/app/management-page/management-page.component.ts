import { Component } from '@angular/core';

import { LocalStorageService } from '../shared/services/local-storage.service';
import { IQuestion } from "../shared/interfaces/IQuestion";

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent {

  questions: IQuestion[] = this.lsService.getItem('questions');

  constructor(private lsService: LocalStorageService) {
    this.questions.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());
  }

  delete(index: number): void {
    this.questions.splice(index, 1);
    this.lsService.setItem('questions', this.questions);
  }
}
