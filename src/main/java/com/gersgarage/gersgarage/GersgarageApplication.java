package com.gersgarage.gersgarage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@ComponentScan("com.gersgarage.*")
@EnableJpaRepositories("com.gersgarage.repository")
@EntityScan("com.gersgarage.model")
public class GersgarageApplication {

	public static void main(String[] args) {
		SpringApplication.run(GersgarageApplication.class, args);
	}

}
