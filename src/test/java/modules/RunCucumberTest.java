package modules;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features", 
		strict = true,
		glue= {"modules","steps_definition"},
		plugin = {"pretty", "html:target/site/cucumber"}

		)

public class RunCucumberTest {

}
