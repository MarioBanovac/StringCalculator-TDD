export default class StringCalculator {
  add(numbers: string): number {
    if (numbers.length === 0) return 0;

    const delimiterPattern = /^\/\/(.?)\n/;
    let customDelimiter = null;

    let match = delimiterPattern.exec(numbers);
    if (match) {
      customDelimiter = match[1];
      const cleanedStr = numbers.replace(delimiterPattern, "");
      return cleanedStr
        .split(customDelimiter)
        .reduce((acc, cur) => acc + parseInt(cur), 0);
    }

    return numbers.split(/[\n,]/).reduce((acc, cur) => acc + parseInt(cur), 0);
  }
}
