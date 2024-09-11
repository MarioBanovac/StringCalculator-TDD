import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./features/Add.feature");

defineFeature(feature, (test) => {
  test("Entering two numbers as string", ({ given, when, then }) => {
    given("The numbers are whole numbers", () => {});

    when("I enter them separated as commas", () => {
    });
    then("I should get the numbers sum", () => {});
  });
});
