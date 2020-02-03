  Feature: Login to trader directory
    @Regression
    Scenario: login to the trader directory platform
      Given launch the trader directory url
      When login button should be displayed
      Then click the login button
