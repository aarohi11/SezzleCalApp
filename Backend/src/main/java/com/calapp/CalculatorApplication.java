package com.calapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//import com.timetracker.controller.CompanyController;
//import com.timetracker.repository.CompanyRepository;


@SpringBootApplication
@ComponentScan
public class CalculatorApplication extends SpringBootServletInitializer{

		
	public static void main(String[] args) {
		SpringApplication.run(CalculatorApplication.class, args);
	}
	
	@Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
	      return builder.sources(CalculatorApplication.class);
	  }
}
