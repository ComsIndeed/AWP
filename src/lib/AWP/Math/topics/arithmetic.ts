import { Question, QuestionData } from "../classes";

class Arithmetic {
  static createQuestion(difficulty: number): ArithmeticQuestion {
    return void;
  }
}

class ArithmeticQuestion extends Question {
  createChoices() {}

  static create(difficulty: number): QuestionData {
    
    // Easy (1-50)
    if(difficulty > 0 && difficulty < 51) {
      return {
        
      }
    }

  }
  
  constructor(options: {type: "choice" | "blank" ,difficulty: number}) {

    super({ topic: "arithmetic", difficulty: options.difficulty });
  }
}
