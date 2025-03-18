
@Regression
Feature: Verify login functionality on Automation Test Store

    Scenario Outline: Scenario Outline name: Validate Main Menu elements are redirected to respective pages.
        Given I am on the home page
        When I click on the "<element>"
        Then I should be redirected to the "<element>" page

        Examples:
            | element           |
            | Login or register |
            | Specials          |
            | Login             |
            | Check Your Order  |
            | Cart              |

