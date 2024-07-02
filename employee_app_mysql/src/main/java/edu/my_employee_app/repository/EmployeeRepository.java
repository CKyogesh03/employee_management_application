package edu.my_employee_app.repository;

import edu.my_employee_app.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Integer> {

    // dynamic findBy method concept
    public EmployeeEntity findByFirstName(String firstName);
    
    //using JPQL query
    @Query("select e from EmployeeEntity e where e.firstName=:firstName")
    EmployeeEntity fetchByFirstName(@Param("firstName") String firstName);

    //using JPQL query
    @Query("select e from EmployeeEntity e where e.salary between :start and :end")
    List<EmployeeEntity> fetchSalaryBetween(@Param("start") double start, @Param("end") double end);

     //using native query
     @Query(value = "select first_name from employee_entity", nativeQuery = true)
     List<String> fetchAllFirstNames();
}
