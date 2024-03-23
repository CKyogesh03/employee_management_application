package edu.employee_app_mongodb.controller;

import edu.employee_app_mongodb.model.Employee;
import edu.employee_app_mongodb.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    private final EmployeeService employeeService; //EmployeeServiceImpl object is stored here //to provide abstraction we use interface type
    public EmployeeController(EmployeeService employeeService){
        this.employeeService=employeeService;
    }

    @GetMapping("/test")
    public String testServer(){
        return "connected to server successfully";
    }

    //note: when returning employee object to front end - id value is zero. so we dont provide it from client. bcoz it is generated automatically

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable int id){
        Employee employee= employeeService.getEmployeeById(id);
       return ResponseEntity.ok(employee);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getEmployees(){
        List<Employee> listOfEmployee= employeeService.getAllEmployee();
        return ResponseEntity.ok(listOfEmployee);
    }

    //note: returning id check
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employee){
        return ResponseEntity.ok(employeeService.updateEmployee(id ,employee));
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Boolean> deleteEmployee(@PathVariable int id){
        return ResponseEntity.ok(employeeService.deleteEmployeeById(id));
    }
}