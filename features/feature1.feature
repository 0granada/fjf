Feature: Search My web page

  As a human
  I want to search the web
  So I can find information

  Scenario: Search for localhost:3000
    Given I have a web browser
    When I want to visit "http://localhost:3000"
    Then I see the title "Funky Junky Food"

  @watch
  Scenario: Search for localhost:3000
    Given I visit "http://localhost:3000" 
      And the product quantity is 0
    When I click in the increase quantity button
    Then I see as a new quantity the value 1
