package com.mypocket.mypocketapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * http://localhost:8080/h2-console/
 *
 * jdbc:h2:mem:testdb
 * 
 * http://localhost:8080/swagger-ui.html#/
 */
@SpringBootApplication
public class MyPocketApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyPocketApiApplication.class, args);
	}
}
