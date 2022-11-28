$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/carambar.feature");
formatter.feature({
  "name": "Authentification",
  "description": "  As a user, I want to connect to carambar\u0026co Applicaion",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Authenticate with correct credentials (correct login and correct password)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Happy-path"
    }
  ]
});
formatter.step({
  "name": "User open the browser \"\u003cbrowser\u003e\" on carambar homePage",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.step({
  "name": "I type userName \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I type password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.step({
  "name": "The page myAccount is open",
  "keyword": "Then "
});
formatter.step({
  "name": "The welcome message \"\u003cwelcomeLoginMsg\u003e\" is displayed on account page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browser",
        "login",
        "password",
        "welcomeLoginMsg"
      ]
    },
    {
      "cells": [
        "chrome",
        "omartest@yopmail.com",
        "Qwerty123@",
        "Salut Omar !"
      ]
    },
    {
      "cells": [
        "firefox",
        "omartest@yopmail.com",
        "Qwerty123@",
        "Salut Omar !"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Authenticate with correct credentials (correct login and correct password)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Happy-path"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"chrome\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type userName \"omartest@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_userName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password \"Qwerty123@\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The page myAccount is open",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_page_myAccount_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The welcome message \"Salut Omar !\" is displayed on account page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.the_welcome_message_is_displayed_on_account_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Authenticate with correct credentials (correct login and correct password)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Happy-path"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"firefox\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type userName \"omartest@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_userName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password \"Qwerty123@\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The page myAccount is open",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_page_myAccount_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The welcome message \"Salut Omar !\" is displayed on account page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.the_welcome_message_is_displayed_on_account_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Authenticate with \"\u003cfield-case\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path"
    }
  ]
});
formatter.step({
  "name": "User open the browser \"\u003cbrowser\u003e\" on carambar homePage",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.step({
  "name": "I type userName \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I type password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.step({
  "name": "The error message \"\u003clogin-err-message\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browser",
        "field-case",
        "login",
        "password",
        "login-err-message"
      ]
    },
    {
      "cells": [
        "chrome",
        "wrong-username",
        "omartest.false@yopmail.com",
        "Qwerty123@",
        "Échec d\u0027authentification"
      ]
    },
    {
      "cells": [
        "chrome",
        "wrong-password",
        "omartest@yopmail.com",
        "P@ssw0rd",
        "Échec d\u0027authentification"
      ]
    },
    {
      "cells": [
        "firefox",
        "wrong-username",
        "omartest.false@yopmail.com",
        "Qwerty123@",
        "Échec d\u0027authentification"
      ]
    },
    {
      "cells": [
        "firefox",
        "wrong-password",
        "omartest@yopmail.com",
        "P@ssw0rd",
        "Échec d\u0027authentification"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Authenticate with \"wrong-username\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"chrome\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type userName \"omartest.false@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_userName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password \"Qwerty123@\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error message \"Échec d\u0027authentification\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_error_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Authenticate with \"wrong-password\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"chrome\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type userName \"omartest@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_userName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password \"P@ssw0rd\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error message \"Échec d\u0027authentification\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_error_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Authenticate with \"wrong-username\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"firefox\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type userName \"omartest.false@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_userName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password \"Qwerty123@\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error message \"Échec d\u0027authentification\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_error_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Authenticate with \"wrong-password\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"firefox\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type userName \"omartest@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_userName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password \"P@ssw0rd\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error message \"Échec d\u0027authentification\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_error_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Authenticate with \"\u003cfield-case\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path-empty-fields"
    }
  ]
});
formatter.step({
  "name": "User open the browser \"\u003cbrowser\u003e\" on carambar homePage",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.step({
  "name": "UserName field is empty",
  "keyword": "When "
});
formatter.step({
  "name": "Password field is empty",
  "keyword": "And "
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.step({
  "name": "The error message \"\u003clogin-err-message\u003e\" is displayed under field",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browser",
        "field-case",
        "login",
        "password",
        "login-err-message"
      ]
    },
    {
      "cells": [
        "chrome",
        "empty-usernameAndPassword",
        "",
        "",
        "Champ requis"
      ]
    },
    {
      "cells": [
        "firefox",
        "empty-usernameAndPassword",
        "",
        "",
        "Champ requis"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Authenticate with \"empty-usernameAndPassword\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path-empty-fields"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"chrome\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UserName field is empty",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.username_field_is_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password field is empty",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.password_field_is_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error message \"Champ requis\" is displayed under field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_error_message_is_displayed_under_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Authenticate with \"empty-usernameAndPassword\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad-path-empty-fields"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the browser \"firefox\" on carambar homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCarambarSteps.user_open_the_browser_on_carambar_homePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to the authentification Form",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.user_navigate_to_the_authentification_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UserName field is empty",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCarambarSteps.username_field_is_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password field is empty",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.password_field_is_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error message \"Champ requis\" is displayed under field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_error_message_is_displayed_under_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});