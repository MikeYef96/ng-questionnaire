export enum QuestionType {
  Single = 'Single',
  Multiple = 'Multiple',
  Text = 'Text'
}

export const questionTypes: Map<QuestionType, string> = new Map<QuestionType, string>([
  [QuestionType.Single, 'Single'],
  [QuestionType.Multiple, 'Multiple'],
  [QuestionType.Text, 'Text'],
]);


// we can use some mapToOption if we need { key: .., value: .. }
// export const questionTypesOption: mapToOptions(QuestionTypes);
