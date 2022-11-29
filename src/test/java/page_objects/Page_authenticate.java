package page_objects;

import static modules.Hooks.driver;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Duration;

import org.openqa.selenium.By;

public class Page_authenticate {
	
	By usernameLocator = By.name("email");
	By passwordLocator = By.name("password");
	By btnLoginLocator = By.cssSelector(".nq-c-Btn");
	By invalilUserPwdMsgPLocator = By.cssSelector(".nq-c-Field-errors");
	By AccountPageLinkLocator = By.cssSelector(".nq-c-Account-header-title");
	By msgWelcomeAccountLocator = By.cssSelector(".nq-c-Account-header-subtitle"); 
	By errorMsgEmptyField = By.cssSelector(".nq-c-Field-errors");
	
	public void findAndClearUserName() {
		driver.findElement(usernameLocator).click();
		driver.findElement(usernameLocator).clear();
	}
	
	public void findAndClearPassword() {
		driver.findElement(passwordLocator).click();
		driver.findElement(passwordLocator).clear();
	}
	
	public void typeUsername(String username) {
		System.out.println("Inside function typeUsername");
		this.findAndClearUserName();
		driver.findElement(usernameLocator).sendKeys(username);
	}
	
	public void typePassword(String username) {
		System.out.println("Inside function typePassword");
		this.findAndClearPassword();
		driver.findElement(passwordLocator).sendKeys(username);
		 
	}
	
	public void submitLogin() {
		System.out.println("Inside function submitLogin");
		driver.findElement(btnLoginLocator).click();
		 driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
		
	}
	
	public void VerifAccountpage() {
		try {
			assertEquals("Mon compte", driver.findElement(AccountPageLinkLocator).getText());
		} catch (Error e) {
			System.out.println(e.toString()); 
			throw(e);
		}
	}
	
	public void checkWelcomeMsgAccountPage(String welcomeMessage) {
		try {
			assertEquals(welcomeMessage, driver.findElement(msgWelcomeAccountLocator).getText());
		} catch (Error e) {
			System.out.println(e.toString());
			throw(e);
		}
	}
	 
	public void checkLoginErrorMsg(String errorMessage) {
		System.out.println("Inside function checkLoginErrorMsg");
		try {
			assertEquals(errorMessage, driver.findElement(invalilUserPwdMsgPLocator).getText());
			System.out.println(errorMessage);
			System.out.println(driver.findElement(invalilUserPwdMsgPLocator).getText());
		} catch (Exception e) {
			System.out.println(e.toString());
			throw(e);
		} 
		
	}
	
	public void checkEmptyFieldsErrorMsg(String errorMessage) {
		System.out.println("Inside function checkEmptyFieldsErrorMsg");
		try {
			assertEquals(errorMessage, driver.findElement(errorMsgEmptyField).getText());
			System.out.println(errorMessage);
			System.out.println(driver.findElement(errorMsgEmptyField).getText());
		} catch (Exception e) {
			System.out.println(e.toString()); 
			throw(e);
		}
		
	}

}
