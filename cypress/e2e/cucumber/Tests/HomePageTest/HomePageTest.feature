Feature: I want check some Eleevenys at a Home Page

  Background: Navigate to the HomePage Website
    Given I navigate to the HomePage Website

  Scenario: I go to the Home Page Website
    Then I validate the browser
    When I validate the title
    Then I validate Top Trending Categories are present
    And I click Laptops section
    Then I validate if this a Laptop page