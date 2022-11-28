#Author: Omar
Feature: Authentification
  
  As a user, I want to connect to carambar&co Applicaion

  @Happy-path
  Scenario Outline: Authenticate with correct credentials (correct login and correct password)
    Given User open the browser "<browser>" on carambar homePage
    And User navigate to the authentification Form
    When I type userName "<login>"
    And I type password "<password>"
    And I click the button login
    Then The page myAccount is open
    And The welcome message "<welcomeLoginMsg>" is displayed on account page

    Examples: 
      | browser | login                | password   | welcomeLoginMsg |
      | chrome  | omartest@yopmail.com | Qwerty123@ | Salut Omar !    |
      | firefox | omartest@yopmail.com | Qwerty123@ | Salut Omar !    |

  @Sad-path
  Scenario Outline: Authenticate with "<field-case>"
    Given User open the browser "<browser>" on carambar homePage
    And User navigate to the authentification Form
    When I type userName "<login>"
    And I type password "<password>"
    And I click the button login
    Then The error message "<login-err-message>" is displayed

    Examples: 
      | browser | field-case     | login                      | password   | login-err-message        |
      | chrome  | wrong-username | omartest.false@yopmail.com | Qwerty123@ | Échec d'authentification |
      | chrome  | wrong-password | omartest@yopmail.com       | P@ssw0rd   | Échec d'authentification |
      | firefox | wrong-username | omartest.false@yopmail.com | Qwerty123@ | Échec d'authentification |
      | firefox | wrong-password | omartest@yopmail.com       | P@ssw0rd   | Échec d'authentification |

  @Sad-path-empty-fields
  Scenario Outline: Authenticate with "<field-case>"
    Given User open the browser "<browser>" on carambar homePage
    And User navigate to the authentification Form
    When UserName field is empty
    And Password field is empty
    And I click the button login
    Then The error message "<login-err-message>" is displayed under field

    Examples: 
      | browser | field-case                | login | password | login-err-message |
      | chrome  | empty-usernameAndPassword |       |          | Champ requis      |
      | firefox | empty-usernameAndPassword |       |          | Champ requis      |
