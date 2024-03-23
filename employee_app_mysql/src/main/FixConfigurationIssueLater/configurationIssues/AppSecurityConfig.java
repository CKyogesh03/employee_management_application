package edu.my_employee_app.configurationIssues;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//@Configuration
//@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfiguration {
    @Autowired
    private UserDetailsService userDetailsService;

     @Bean
     public AuthenticationProvider authProvider(){
         DaoAuthenticationProvider provider= new DaoAuthenticationProvider();
         provider.setUserDetailsService(userDetailsService);
         provider.setPasswordEncoder(new BCryptPasswordEncoder());
         return provider;
     }
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity.authorizeHttpRequests(customizer->{
//            customizer.requestMatchers("/hii").authenticated();
//            customizer.requestMatchers("/bye").permitAll();
//            customizer.requestMatchers("/hello").denyAll();
//
//        });
////        httpSecurity.formLogin(Customizer.withDefaults());
////        httpSecurity.httpBasic(Customizer.withDefaults());
//        return httpSecurity.build();
//    }
}
