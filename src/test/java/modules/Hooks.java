package modules;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.ReadProperty;

public class Hooks {
	
	public static WebDriver driver;
	public static String ChromeWebDriverFile;
	public static String FirefoxWebDriverFile;
	public static String BaseUrl;

	@Before
	public void setUp() throws IOException {

		String PathPropertiesFile = System.getProperty("user.dir")
				+ "/src/test/resources/environnement/config.properties";
		ReadProperty objProperties = new ReadProperty(PathPropertiesFile);

		ChromeWebDriverFile = System.getProperty("user.dir") + objProperties.getProperty("PathDriverChrome");
		FirefoxWebDriverFile = System.getProperty("user.dir") + objProperties.getProperty("PathDriverFireFox");
		BaseUrl = objProperties.getProperty("PathBaseUrl"); 
	}

	@After
	public void teardown() {
		if (driver != null) {
			driver.quit();
		}
	}

}
