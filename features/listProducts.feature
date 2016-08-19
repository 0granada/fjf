Feature: List the Products in Dropdown Menu

  As a mortal
  I want to see the offered products listed
  So I can choose a single one

  | Product    |  Price  |
  | Hamburger  |  10     |
  | Hotdog     |  8      |
  | Quesadilla |  5      |
  | Pizza      |  7      |
  | Nachos     |  10     |
  | Sandwich   |  7      |

  Scenario: Add products to dropdown menu
    Given there is a list of products
    When I display the dropdown menu
    Then I see all the products displayed



