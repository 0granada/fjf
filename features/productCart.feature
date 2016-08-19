Feature: Add Products to Product Cart

As a mortal
I want to see the updated product cart
Everytime I add a product

Scenario: Update Product Cart
  Given there are no products selected
  When I select a product from the dropdown list
    And I add the product
  Then the product is displayed in the product cart section