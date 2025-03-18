Feature: Verify login functionality on Automation Test Store

    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        Then I should be redirected to the account dashboard



    Scenario: Unsuccessful login with invalid credentials
        Given I am on the login page
        When I enter invalid credentials
        Then I should see an error message