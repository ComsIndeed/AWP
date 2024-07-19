export class Integer {
  // Gives a random number
  static randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Takes an initial number and randomizes it from within a specified range
  // Difficulty is an integer above 0; it will exponentially rump up the output
  static randomize(
    initial: number,
    range: number,
    options?: {
      mode?: "normal" | "up" | "down";
      difficulty?: number;
    }
  ): number {
    let toAdd = 0;
    if (options != undefined && options.difficulty != undefined) {
      toAdd = this.randomInt(1 * (options.difficulty / 10), options.difficulty);
    }

    if (
      options === undefined ||
      options.mode === undefined ||
      options.mode === "normal"
    ) {
      const minRange = initial - Math.floor(range / 2);
      const maxRange = initial + Math.ceil(range / 2);
      const result = this.randomInt(minRange, maxRange);
      return result + toAdd;
    }
    if (options.mode === "up") {
      const result = this.randomInt(initial, initial + range);
      return result + toAdd;
    }
    if (options.mode === "down") {
      const result = this.randomInt(initial - range, initial);
      return result + toAdd;
    }
    return initial;
  }
}
