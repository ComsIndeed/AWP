export abstract class Answer {
  value: number;
  unit?: string;

  constructor(answer: { value: number; unit?: string }) {
    this.value = answer.value;
    this.unit = answer.unit;
  }
}
