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

export type AlgebraicExpression = Term[];
