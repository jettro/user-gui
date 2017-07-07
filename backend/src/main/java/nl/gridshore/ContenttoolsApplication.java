package nl.gridshore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableWebSecurity
public class ContenttoolsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContenttoolsApplication.class, args);
    }


}
