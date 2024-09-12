Feature: Add

 Scenario: Add an empty string
    Given the input is an empty string
    When I call the Add method
    Then the result should be 0
 Scenario: Add an '1'
    Given the input is '1'
    When I call the Add method
    Then the result should be 1
 Scenario: Add an '1,2'
    Given the input is '1,2'
    When I call the Add method
    Then the result should be 3
 Scenario: Add an unknown amount of numbers
    Given the input is '1,2,3,4,5,6,7,8,9,10'
    When I call the Add method
    Then the result should be 55
 Scenario: Handle new lines between numbers (instead of commas)
    Given the input is '1\n2,3'
    When I call the Add method
    Then the result should be 6
 Scenario: Support different delimiters
    Given the input is '//;\n1;2'
    When I call the Add method
    Then the result should be 3
 Scenario: Negative number as input
    Given the input is '-1,2,3'
    When I call the Add method
    Then an exception should be thrown
    And it should contain message 'negatives not allowed' and the input
 Scenario: Ignore numbers bigger than 1000
    Given the input is '5,1001'
    When I call the Add method
    Then the result should be 5
