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
  asObject: AsObject;
}

export interface QuestionAnswer<ForTopic extends string, Expects> {
  forTopic: ForTopic;
  expects: Expects;
}
