package com.gersgarage.gersgarage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;




@SpringBootApplication
@ComponentScan("com.gersgarage.*")
@EnableJpaRepositories("com.gersgarage.repository")
@EntityScan("com.gersgarage.model")
public class GersgarageApplication {

	public static void main(String[] args) {
		SpringApplication.run(GersgarageApplication.class, args);
		
	}
	
	// taken from https://spring.io/guides/gs/rest-service-cors/
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/greeting-javaconfig").allowedOrigins("http://localhost:8081");
			}
		};
	}


}
