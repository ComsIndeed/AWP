export abstract class Answer {
  value: number;
  unit?: string;

  constructor(answer: { value: number; unit?: string }) {
    this.value = answer.value;
    this.unit = answer.unit;
  }
}

// Question Class (Modified)
export abstract class Question<
  Topic extends string,
  Difficulty extends number,
  QuestionItemObject,
  QuestionAnswerType extends string,
  QuestionAnswerExpects
> {
  header: QuestionHeader<Topic, Difficulty>;
  item: QuestionItem<Topic, QuestionItemObject>;
  answer: QuestionAnswer<Topic, QuestionAnswerType, QuestionAnswerExpects>;

  constructor(
    topic: Topic,
    difficulty: Difficulty,
    questionItemObject: QuestionItemObject,
    questionAnswerType: QuestionAnswerType,
    questionAnswerExpects: QuestionAnswerExpects,
    questionItemText?: QuestionItem<Topic, QuestionItemObject>["asText"]
  ) {
    this.header = { topic, difficulty };
    this.item = {
      topic,
      asObject: questionItemObject,
      asText: questionItemText,
    };
    this.answer = {
      forTopic: topic,
      type: questionAnswerType,
      expects: questionAnswerExpects,
    };
  }
}

export interface QuestionHeader<
  Topic extends string,
  Difficulty extends number
> {
  topic: Topic;
  difficulty: Difficulty;
}

export interface QuestionItem<Topic extends string, AsObject> {
  topic: Topic;
  asText?: string;
  asObject?: AsObject;
}

export interface QuestionAnswer<
  ForTopic extends string,
  Type extends string,
  Expects
> {
  forTopic: ForTopic;
  type: Type;
  expects: Expects;
}

export type AlgebraicExpression = Term[];
export class Term {
  coefficient: number;
  variables: Record<string, number>;

  static newExpression(
    terms: [number, Record<string, number> | {} | void][]
  ): AlgebraicExpression {
    return terms.map((termItem) => {
      return new Term(termItem[0], termItem[1] ? termItem[1] : undefined);
    });
  }

  constructor(coefficient: number, variables: Record<string, number> | void) {
    this.coefficient = coefficient;
    this.variables = variables || {};
  }
}
