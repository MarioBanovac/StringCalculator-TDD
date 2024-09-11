export default class StringCalculator {
  add(numbers: string): number {
    if (numbers.length === 0) return 0;

    return numbers.split(",").reduce((acc, cur) => acc + parseInt(cur), 0);
  }
}
