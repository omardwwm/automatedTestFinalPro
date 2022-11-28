package steps_definition;

//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page_objects.Page_authenticate;
import utils.CarambarCommun;

public class LoginCarambarSteps {
	
	private CarambarCommun carambarPage = new CarambarCommun();
	private Page_authenticate loginPage = new Page_authenticate();
	
	@Given("User open the browser {string} on carambar homePage")
	public void user_open_the_browser_on_carambar_homePage(String string) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("user_open_the_browser_on_carambar_homePage");
		carambarPage.lanceBrowser(string);
//	    throw new PendingException();
	} 

	@Given("User navigate to the authentification Form")
	public void user_navigate_to_the_authentification_Form() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("user_navigate_to_the_authentification_Form");
		carambarPage.openPgae();
//	    throw new PendingException();
	}

	@When("I type userName {string}")
	public void i_type_userName(String string) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_type_userName");
		loginPage.typeUsername(string);
//	    throw new PendingException();
	}

	@When("I type password {string}")
	public void i_type_password(String string) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_type_password");
		loginPage.typePassword(string);
//	    throw new PendingException();
	}

	@When("I click the button login")
	public void i_click_the_button_login() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_click_the_button_login");
		loginPage.submitLogin();
//	    throw new PendingException();
	}

	@Then("The page myAccount is open")
	public void the_page_myAccount_is_open() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the_page_myAccount_is_open");
		loginPage.VerifAccountpage();
//	    throw new PendingException();
	}
	
	@Then("The welcome message {string} is displayed on account page")
	public void the_welcome_message_is_displayed_on_account_page(String string) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the_welcome_message_is_displayed_on_account_page");
		loginPage.checkWelcomeMsgAccountPage(string);
//	    throw new PendingException();
	}

	@Then("The error message {string} is displayed")
	public void the_error_message_is_displayed(String string) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the_error_message_is_displayed");
		loginPage.checkLoginErrorMsg(string);
//	    throw new PendingException();
	}

	@When("UserName field is empty")
	public void username_field_is_empty() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("username_field_is_empty");
		loginPage.findAndClearUserName();
//	    throw new PendingException();
	}

	@When("Password field is empty")
	public void password_field_is_empty() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("password_field_is_empty");
		loginPage.findAndClearPassword();
//	    throw new PendingException();
	}

	@Then("The error message {string} is displayed under field")
	public void the_error_message_is_displayed_under_field(String string) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the_error_message_is_displayed_under_field");
		loginPage.checkEmptyFieldsErrorMsg(string);
//	    throw new PendingException();
	}


}
