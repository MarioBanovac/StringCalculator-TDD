import { loadFeature, defineFeature } from "jest-cucumber";
import StringCalculator from "./StringCalculator";

const addFeature = loadFeature("./features/Add.feature");

defineFeature(addFeature, (test) => {
  let calculator: StringCalculator;
  let input: string;
  let result: number;

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
});
