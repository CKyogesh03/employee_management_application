package edu.my_employee_app.controller;

import edu.my_employee_app.entity.EmployeeEntity;
import edu.my_employee_app.model.Employee;
import edu.my_employee_app.service.EmployeeService;
import edu.my_employee_app.service.EmployeeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//3000 - for react normal react, 5500 - for vs code live server, 5174 - vite react
@CrossOrigin(origins = {"http://127.0.0.1:5500","http://localhost:3000",
        "http://localhost:5174/","http://localhost:5173/"})

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    private final EmployeeService employeeService;   //EmployeeServiceImpl object is stored here //to provide abstraction we use interface type
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

//    ===========================================================================================

@GetMapping("/employees/query/{firstName}")
public ResponseEntity<EmployeeEntity> getEmployeeByFirstName(@PathVariable String firstName) {
    EmployeeEntity employee = employeeService.findByFirstName(firstName);

    if (employee != null) {
        return new ResponseEntity<>(employee, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

    @GetMapping("/employees/query2/{firstName}")
    public ResponseEntity<EmployeeEntity> fetchEmployeeByFirstName(@PathVariable String firstName) {
        EmployeeEntity employee = employeeService.fetchByFirstName(firstName);

        if (employee != null) {
            return new ResponseEntity<>(employee, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/employees/query/bySalary/{start}/{end}")
    public ResponseEntity<List<EmployeeEntity>> getEmployeesBySalaryRange(@PathVariable double start, @PathVariable double end) {
        List<EmployeeEntity> employees = employeeService.fetchSalaryBetween(start, end);

        if (!employees.isEmpty()) {
            return new ResponseEntity<>(employees, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    // using native query
    @GetMapping("/employees/allFirstNames")
    public ResponseEntity<List<String>> getAllFirstNames() {
        List<String> firstNames = employeeService.fetchAllFirstNames();

        if (!firstNames.isEmpty()) {
            return new ResponseEntity<>(firstNames, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}