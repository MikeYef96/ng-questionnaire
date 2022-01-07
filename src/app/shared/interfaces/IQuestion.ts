import { QuestionType } from '../enums/question-type';

export interface IQuestion {
  id: string,
  title: string,
  creationDate: string,
  type: QuestionType,
  answeredDate?: Date,
  answers?: string[],
  answer?: string[],
}


