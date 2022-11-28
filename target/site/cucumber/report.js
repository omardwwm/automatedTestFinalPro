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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput name\u003d\"email\" type\u003d\"email\" value\u003d\"\" required\u003d\"\"\u003e is not clickable at point (510, 24). Other element would receive the click: \u003cul\u003e...\u003c/ul\u003e\n  (Session info: chrome\u003d107.0.5304.107)\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027PCOFOB\u0027, ip: \u0027172.21.160.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a231b8b6be17a1cc902eb6dcd2c8d3b3, clickElement {id\u003d93811def-26fc-4e3a-a778-4743451c9a05}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\PRECIS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58651}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58651/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (a231b8b6be17a1cc902eb6dcd2c8d3b3)] -\u003e name: email]\nSession ID: a231b8b6be17a1cc902eb6dcd2c8d3b3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat page_objects.Page_authenticate.findAndClearUserName(Page_authenticate.java:21)\r\n\tat page_objects.Page_authenticate.typeUsername(Page_authenticate.java:32)\r\n\tat steps_definition.LoginCarambarSteps.i_type_userName(LoginCarambarSteps.java:35)\r\n\tat ✽.I type userName \"omartest.false@yopmail.com\"(src/test/resources/features/carambar.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I type password \"Qwerty123@\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_type_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCarambarSteps.i_click_the_button_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The error message \"Échec d\u0027authentification\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCarambarSteps.the_error_message_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
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