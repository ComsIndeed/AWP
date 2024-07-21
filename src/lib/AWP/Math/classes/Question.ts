import { QuestionHeader, QuestionItem, QuestionAnswer } from "./interfaces";

export abstract class Question<
  Topic extends string,
  Difficulty extends number,
  ItemData,
  AnswerData
> {
  header: QuestionHeader<Topic, Difficulty>;
  item: QuestionItem<Topic, ItemData>;
  answer: QuestionAnswer<Topic, AnswerData>;

  constructor(
    header: QuestionHeader<Topic, Difficulty>,
    item: QuestionItem<Topic, ItemData>,
    answer: QuestionAnswer<Topic, AnswerData>
  ) {
    this.header = header;
    this.item = item;
    this.answer = answer;
  }

  // Abstract methods to be implemented by specific question types
  abstract createChoices(): AnswerData[];
  abstract generateQuestion(): void;
}
