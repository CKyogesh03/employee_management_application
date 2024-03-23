package edu.my_employee_app.configurationIssues;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
        User findByUsername(String usetname);
}
