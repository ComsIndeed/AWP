export abstract class Answer {
  value: number;
  unit?: string;

  constructor(answer: { value: number; unit: string }) {
    this.value = answer.value;
    this.unit = answer.unit;
  }
}

export abstract class Question {
  header: QuestionHeader;
  question: QuestionData;

  constructor(header: QuestionHeader, question: QuestionData) {
    this.header = header;
    this.question = question;
  }
}

export interface QuestionHeader {
  topic: string;
  difficulty: number;
}

interface QuestionObjectFormat {
  [key: string]: string | number | string[] | number[];
}

export interface QuestionData {
  type: "choice" | "blank";
  textFormat?: string;
  objectFormat: QuestionObjectFormat;
  choices?: string[] | number[];
  answer: string | number;
}

export abstract class Term {}
