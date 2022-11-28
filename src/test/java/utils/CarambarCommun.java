package utils;

import static modules.Hooks.BaseUrl;
import static modules.Hooks.ChromeWebDriverFile;
import static modules.Hooks.FirefoxWebDriverFile;
import static modules.Hooks.driver;
//import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CarambarCommun {
	
	By acceptCookiesBtnLocator = By.cssSelector(".acceptBtn"); 
	
	public void lanceBrowser(String browserName) {

		switch (browserName) {
		case "chrome":
			System.setProperty("webdriver.chrome.driver", ChromeWebDriverFile);
			driver = new ChromeDriver();

			break;

		case "firefox":
			System.setProperty("webdriver.gecko.driver", FirefoxWebDriverFile);
			driver = new FirefoxDriver();

			break;

		default:
			System.setProperty("webdriver.chrome.driver", ChromeWebDriverFile);
			driver = new ChromeDriver();
			break;
		}

	} 
	
//	public void VerifAccountpage() {
//		try {
//			assertEquals("Mon compte", driver.findElement(AccountPageLinkLocator).getText());
//		} catch (Error e) {
//			System.out.println(e.toString());
//		}
//	}
	
	public void openPgae() {
		driver.get(BaseUrl);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
		driver.findElement(acceptCookiesBtnLocator).click();
//		if (condition) {
//			
//		}
		 driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
	}

}
