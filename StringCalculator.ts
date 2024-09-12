export default class StringCalculator {
  add(numbers: string): number | Error {
    let stringArr: string[];
    let negativeNumbersArr: string[];
    if (numbers.length === 0) return 0;

    const delimiterPattern = /^\/\/(.?)\n/;
    let customDelimiter = null;

    let match = delimiterPattern.exec(numbers);
    if (match) {
      customDelimiter = match[1];
      const cleanedStr = numbers.replace(delimiterPattern, "");
      stringArr = cleanedStr.split(customDelimiter);
      negativeNumbersArr = stringArr.filter((num) => parseInt(num) < 0);
      if (negativeNumbersArr.length > 0) {
        throw new Error(`negatives not allowed: ${negativeNumbersArr}`);
      }
      return cleanedStr
        .split(customDelimiter)
        .reduce((acc, cur) => acc + parseInt(cur), 0);
    }

    stringArr = numbers.split(/[\n,]/);
    negativeNumbersArr = stringArr.filter((num) => parseInt(num) < 0);
    if (negativeNumbersArr.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNumbersArr}`);
    }
    return numbers.split(/[\n,]/).reduce((acc, cur) => acc + parseInt(cur), 0);
  }
}
