export class Integer {
  static randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static randomize(
    initial: number,
    range: number,
    mode: "normal" | "up" | "down" = "normal"
  ): number {
    if (mode === "normal") {
      const minRange = initial - Math.floor(range / 2);
      const maxRange = initial + Math.ceil(range / 2);
      const result = this.randomInt(minRange, maxRange);
      return result;
    }
    if (mode === "up") {
      const result = this.randomInt(initial, initial + range);
      return result;
    }
    if (mode === "down") {
      const result = this.randomInt(initial - range, initial);
      return result;
    }
    return initial;
  }

  static newRandom(additive: number): number {
    const minAdditive = additive - Math.random();
  }
}
