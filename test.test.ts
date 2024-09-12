import { loadFeature, defineFeature } from "jest-cucumber";
import StringCalculator from "./StringCalculator";

const addFeature = loadFeature("./features/Add.feature");

defineFeature(addFeature, (test) => {
  let calculator: StringCalculator;
  let input: string;
  let result: number | Error;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("Add an empty string", ({ given, when, then }) => {
    given("The input is an empty string", () => {
      input = "";
    });

    when("I call the Add method", () => {
      result = calculator.add(input);
    });
    then("the result should be 0", () => {
      expect(result).toBe(0);
    });
  });
  test("Add an '1'", ({ given, when, then }) => {
    given("the input is '1'", () => {
      input = "1";
    });

    when("I call the Add method", () => {
      result = calculator.add(input);
    });
    then("the result should be 1", () => {
      expect(result).toBe(1);
    });
  });
  test("Add an '1,2'", ({ given, when, then }) => {
    given("the input is '1,2'", () => {
      input = "1,2";
    });

    when("I call the Add method", () => {
      result = calculator.add(input);
    });
    then("the result should be 3", () => {
      expect(result).toBe(3);
    });
  });
  test("Add an unknown amount of numbers", ({ given, when, then }) => {
    given("the input is '1,2,3,4,5,6,7,8,9,10'", () => {
      input = "1,2,3,4,5,6,7,8,9,10";
    });

    when("I call the Add method", () => {
      result = calculator.add(input);
    });
    then("the result should be 55", () => {
      expect(result).toBe(55);
    });
  });
  test("Handle new lines between numbers (instead of commas)", ({
    given,
    when,
    then,
  }) => {
    given("the input is '1\\n2,3'", () => {
      input = "1\n2,3";
    });

    when("I call the Add method", () => {
      result = calculator.add(input);
    });
    then("the result should be 6", () => {
      expect(result).toBe(6);
    });
  });
  test("Support different delimiters", ({ given, when, then }) => {
    given("the input is '//;\\n1;2'", () => {
      input = "//;\n1;2";
    });

    when("I call the Add method", () => {
      result = calculator.add(input);
    });
    then("the result should be 3", () => {
      expect(result).toBe(3);
    });
  });
  test("Negative number as input", ({ given, when, then, and }) => {
    given("the input is '-1,2,3'", () => {
      input = "-1,2,3";
    });

    when("I call the Add method", () => {
      expect(() => calculator.add(input)).toThrow();
    });
    then("an exception should be thrown", () => {});
    and(
      "it should contain message 'negatives not allowed' and the input",
      () => {
        expect(() => calculator.add(input)).toThrow(
          `negatives not allowed: -1`
        );
      }
    );
  });
  test("Ignore numbers bigger than 1000", ({ given, when, then }) => {
    given("the input is '5,1001'", () => {
      input = "5,1001";
    });

    when("I call the Add method", () => {
      result = calculator.add(input);
    });
    then("the result should be 5", () => {
      expect(result).toBe(5);
    });
  });
});
