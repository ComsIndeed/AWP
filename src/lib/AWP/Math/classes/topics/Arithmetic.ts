import { Question } from "../Question";
import { Answer } from "../Answer";
import { AlgebraicExpression, Term } from "../Term"; // Assuming Term is in a separate file
import { QuestionHeader, QuestionItem, QuestionAnswer } from "../interfaces";

class ArithmeticQuestion extends Question<
  "arithmetic",
  number,
  AlgebraicExpression,
  Answer
> {
  createChoices(): Term[][] {
    // Implementation for generating multiple choice answers
  }

  generateQuestion(): void {
    // Implementation for generating the question item (asText and asObject)
  }

  constructor(difficulty: number) {
    super(
      {
        topic: "arithmetic",
        difficulty,
      },
      {
        topic: "arithmetic",
        asObject: [], // Initialize with an empty expression
      },
      {
        forTopic: "arithmetic",
        expects: Term[], // TODO : MAKE THE VERY THING THAT GENERATES QUESTIONS
      }
    );

    this.generateQuestion();
  }
}
