Feature: Choose Tour Package
  -- As a traveller
  -- In order to take a trip to the Moon
  -- I want to purchase a tour to the Moon

  Scenario: Selecting a basic package 
    Given I am willing to pay $1000 USD
    When I select basic package 
    Then I should have a basic package in my checkout

  Scenario: Selecting a complete package 
    Given I am willing to pay $2500 USD
    When I select advanced package  
    Then I should have a advanced package in my checkout
    And both seat upgrade and photo package add-ons are applied to my order

Feature: Choose Tour Add-On
  As a traveller that ordered the basic package
  In order to take improve the quality of my trip
  I want to purchase an add-on

  Scenario: Selecting a seat upgrade
    Given I am willing to pay $1000 USD extra
    When I select seat upgrade
    Then I should have a seat upgrade in my checkout

  Scenario: Selecting a photo package 
    Given I am willing to pay $500 USD extra
    When I select photo package
    Then I should have a photo package in my checkout

  Scenario: Select complete package 
    Given I haved selected complete package
    Then Add-On option is not availabe
    And I skip to Sign Waiver

Feature: Sign Waiver
  As a traveller that ordered a package
  In order to take agree to terms conditions and release liability 
  I want to sign the waiver

  Scenario: Sign Waiver - Happy Path
    Given I am willing to sign the waiver
    When I read the terms and conditions and selected the I Agree checkbox
    Then I should proceed to checkout

  Scenario: Don't Agree to Sign Waiver
    Given I am not willing to sign the waiver
    Then the option to proceed to checkout remains disabled
    And I am given the opportunity to contact a sales person to resolve

Feature: Checkout
  As a traveller that ordered a package
  In order to pay for my package
  I want to complete payment using Square

  Scenario: Make payment - Happy Path
    Given I am willing to complete payment
    When I press payment I am redirected to Square Payment System
    Then I should proceed to commit payment

  Scenario: Make payment - Insufficient Funds or Cancel
    Given my payment is not successful or I cancel order
    Then I should be returned to checkout
    And I am given the opportunity to contact a sales person to resolve


Feature: Order Complete
  As a traveller that ordered a package and completed payment
  In order to receive my package
  I want to receive order completion information

  Scenario: Order Complete - Happy Path
    Given I have succesfully completed payment and Square has sent an order callback
    Then I should be redirected to an Order Complete Page

  Scenario: Order Failed - Insufficient Funds or Square Failure
    Given my payment is not successful or Square fails to process order
    Then I should be redirected to Order Failure Page
    And I am given the opportunity to contact a sales person to resolve