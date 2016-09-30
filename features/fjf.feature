Feature: Select Product

As a user 
I want to select the products
so I can start to set up the quantity to order

@watch
Scenario: No products are selected
	Given I visit localhost:3000
	When the page loads
	Then the total of order should be equal to 0

Scenario: Select 1 product
	Given I have no products selected
	When I select a product from the menu
	Then the product is displayed below the menu
		And its default quantity should be equal to 1

Scenario: Cancel selected product
	Given I have selected 1 product
	When I choose to cancel the product
	Then the product is no longer displayed below the menu

Scenario: Change quantity of product
	Given I have selected 1 product
	When I change the quantity of the product
	Then the selected number is displayed in the quantity field