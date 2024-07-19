import { Question, type QuestionData, type QuestionHeader } from "../classes";

class Arithmetic {
  static createQuestion(difficulty: number): ArithmeticQuestion {
    return void;
  }
}

// For doing actual arithmetic calculations; Backend
class ArithmeticOperations {
  static getResult()
}

class ArithmeticQuestion extends Question {
  createChoices() {}

  constructor(options: {type: "choice" | "blank" ,difficulty: number}) {
    const headerData: QuestionHeader = { topic: "arithmetic", difficulty: options.difficulty };
    const questionData: QuestionData = {
      
    }
    super(headerData, questionData);
  }
}
