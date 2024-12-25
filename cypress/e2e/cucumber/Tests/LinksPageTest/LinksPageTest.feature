Feature: I want check respose code at a Links Page


  Scenario Outline: Check 200 Page
    Given I send a GET request to "<path>"
    Then the response status code should be 200

    Examples:
      | path           |
      | /products      |
      | /commitments   |
      | /stories       |