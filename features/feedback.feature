Feature: Feedback

    Scenario: User can submit the feedback form with values
        Given I am on the feedback page
        When I submit the feedback form
        Then I should see feedback results
