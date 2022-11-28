package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.junit.Test;

public class ReadProperty {
	
	private String fileName;

	public ReadProperty(String fileName) {
		this.fileName = fileName;
	}
	
	@Test
	public String getProperty(String locator) throws IOException {
		Properties objProp = new Properties();
		FileInputStream objFile = new FileInputStream(fileName);
		try {
			objProp.load(objFile);
		} catch (Exception e) {		
			// e.printStackTrace();
		}
		String data = objProp.getProperty(locator);
		return data;
	}

}
