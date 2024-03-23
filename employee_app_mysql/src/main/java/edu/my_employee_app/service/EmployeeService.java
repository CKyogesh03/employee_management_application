package edu.my_employee_app.service;

import edu.my_employee_app.entity.EmployeeEntity;
import edu.my_employee_app.model.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// converting entity object to model object and viceversa in service layer
public interface EmployeeService {
    Employee createEmployee(Employee employee);
    Employee getEmployeeById(int id);
    List<Employee> getAllEmployee();
    Employee updateEmployee(int id,Employee employee);
    boolean deleteEmployeeById(int id);

    // ===========================================================================
    EmployeeEntity findByFirstName(String firstName);
    EmployeeEntity fetchByFirstName(String firstName);
    List<EmployeeEntity> fetchSalaryBetween(double start, double end);
    List<String> fetchAllFirstNames();
}