package edu.employee_app_mongodb.service;

import edu.employee_app_mongodb.model.Employee;

import java.util.List;

// converting entity object to model object and viceversa in service layer
public interface EmployeeService {
    Employee createEmployee(Employee employee);
    Employee getEmployeeById(int id);
    List<Employee> getAllEmployee();
    Employee updateEmployee(int id,Employee employee);
    boolean deleteEmployeeById(int id);
}