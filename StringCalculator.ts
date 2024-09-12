export default class StringCalculator {
  public add(numbers: string): number | Error {
    let stringArr: string[];
    let negativeNumbersArr: string[];
    const TARGET_PATTERN = /^\/\/(.?)\n/;
    if (this.isEmpty(numbers)) return 0;

    let pattern = this.findPattern(TARGET_PATTERN, numbers);
    if (pattern) {
      let customDelimiter = this.getDelimiter(pattern);
      const cleanedStr = numbers.replace(TARGET_PATTERN, "");
      stringArr = cleanedStr.split(customDelimiter);
      negativeNumbersArr = this.getNegativeElements(stringArr);
      if (this.containsElements(negativeNumbersArr)) {
        throw new Error(`negatives not allowed: ${negativeNumbersArr}`);
      }
      return this.getSum(cleanedStr.split(customDelimiter));
    }

    stringArr = numbers.split(/[\n,]/);
    negativeNumbersArr = this.getNegativeElements(stringArr);
    if (this.containsElements(negativeNumbersArr)) {
      throw new Error(`negatives not allowed: ${negativeNumbersArr}`);
    }
    return this.getSum(numbers.split(/[\n,]/));
  }

  private isEmpty(data: string): boolean {
    return data.length === 0;
  }

  private containsElements(data: string[]): boolean {
    return data.length > 0;
  }

  private findPattern(regEx: RegExp, string: string): RegExpExecArray | null {
    const pattern = regEx.exec(string);
    return pattern;
  }

  private getDelimiter(input: RegExpExecArray): string {
    return input[1];
  }

  private getSum(input: string[]): number {
    return input.reduce((acc, cur) => acc + parseInt(cur), 0);
  }

  private getNegativeElements(data: string[]): string[] {
    return data.filter((element) => parseInt(element) < 0);
  }
}
