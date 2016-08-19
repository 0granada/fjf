Feature: Select Products

  As a mortal
  I want to select a product from the dropdown list
  So I can set up my order

  Scenario: Select a product from dropdown menu
    Given there are no product selected
    When I display the dropdown menu
      And select 1 product
    Then the product is displayed below the dropdown

 
