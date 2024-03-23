package edu.my_employee_app.configuration;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;

//@Configuration
//@EnableWebSecurity
public class AppSecurityConfig {
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity.authorizeHttpRequests(customizer->{
//            customizer.requestMatchers("/api").authenticated();
//            customizer.requestMatchers("/get").permitAll();
////            customizer.requestMatchers("/hello").denyAll();
//
//        });
//        httpSecurity.formLogin(Customizer.withDefaults());
//        httpSecurity.httpBasic(Customizer.withDefaults());
//        return httpSecurity.build();
//    }
//    @Bean
//    public InMemoryUserDetailsManager setUpUsers(){
//
//        UserDetails yogeshUser=
//                User.withUsername("yogesh")
//                        .password("p123")
//                        .roles("admin","user")
//                        .build();
//        UserDetails karthiUser=
//                User.withUsername("karthi")
//                        .password("p150")
//                        .roles("user","visitor")
//                        .build();
//
//        return new InMemoryUserDetailsManager(yogeshUser,karthiUser);
//    }
//
//    @Bean
//    PasswordEncoder passwordEncoder(){
//        return NoOpPasswordEncoder.getInstance();
//    }
}
