import { Question, type QuestionAnswer, type QuestionItem, type QuestionHeader, Term } from "../classes";

class Arithmetic {

  // // This should return an instance of ArithmeticQuestion
  // static createQuestion(difficulty: number): ArithmeticQuestion {
  //   return void;
  // }
}

// creating a new instance of ArithmeticQuestion must create a question
class ArithmeticQuestion extends Question<"arithmetic", Difficulty, ArithmeticQuestionItem['asObject'], ArithmeticQuestionAnswer['type'], ArithmeticQuestionAnswer['expects']> {
  
  createChoices() {}

  constructor(options: {type: "choice" | "blank" , difficulty: number}) {
    const headerData: QuestionHeader = { topic: "arithmetic", difficulty: options.difficulty };
    const questionItem: QuestionItem = {
      // TODO : We need to create questions here
    }
    const questionAnswer: QuestionAnswer = {
      // TODO : We need to create the answers here too
    }
    super(headerData, questionItem, questionAnswer);
  }
}

interface ArithmeticQuestionItem extends QuestionItem<"arithmetic", Term[]> {}
interface ArithmeticQuestionAnswer extends QuestionAnswer<"topic", "blank" | "choices", Term[]> {}

// ==============================

// TODO : Make a way to make questions
const exampleQuestion: {header: QuestionHeader, item: ArithmeticQuestionItem, answer: ArithmeticQuestionAnswer} = {
  header: {
    difficulty: 124,
    topic: "arithmetic"
  },
  item: {
    topic: "arithmetic",
    asObject: 
  }
}

// ! INFO : Process of creating questions
const newArithmeticQuestion = new ArithmeticQuestion({
  difficulty: 102,
  type: "choice"
}) // returns an 



