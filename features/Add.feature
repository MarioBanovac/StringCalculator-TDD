Feature: Add

Scenario: Entering two numbers as string
    Given The numbers are whole numbers
    When I enter them separated as commas
    Then I should get the numbers sum
