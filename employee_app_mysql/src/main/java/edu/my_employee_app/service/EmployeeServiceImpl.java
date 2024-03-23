package edu.my_employee_app.service;

import edu.my_employee_app.entity.EmployeeEntity;
import edu.my_employee_app.model.Employee;
import edu.my_employee_app.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity= new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity); //BeanUtils.copyProperties(source,target)
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public Employee getEmployeeById(int id) {
        Optional<EmployeeEntity> optionalEmployeeEntity= employeeRepository.findById(id);
        EmployeeEntity employeeEntity=optionalEmployeeEntity.get();
        Employee employee=new Employee(); // allocating memory
        BeanUtils.copyProperties(employeeEntity,employee); //return type of copyProperties(s,t) is void
        return employee;
    }

    @Override
    public List<Employee> getAllEmployee() {
        List<EmployeeEntity> listOfEmployeeEntity=employeeRepository.findAll();
        List<Employee> listOfEmployee= listOfEmployeeEntity.stream()
                .map(employeeEntity->new Employee(
                        employeeEntity.getId(),
                        employeeEntity.getFirstName(),
                        employeeEntity.getLastName(),
                        employeeEntity.getAge(),
                        employeeEntity.getGender(),
                        employeeEntity.getEmail(),
                        employeeEntity.getJob(),
                        employeeEntity.getSalary()
                ))
                .collect(Collectors.toList());
        return listOfEmployee;
    }

    //don't set the id for employeeEntity
    @Override
    public Employee updateEmployee(int id, Employee employee) {
        EmployeeEntity employeeEntity= employeeRepository.findById(id).get(); //Optional<EmployeeEntity>

        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setAge(employee.getAge());
        employeeEntity.setGender(employee.getGender());
        employeeEntity.setEmail(employee.getJob());
        employeeEntity.setJob(employee.getJob());
        employeeEntity.setSalary(employee.getSalary());

        employeeRepository.save(employeeEntity);

        return employee;
    }

    @Override
    public boolean deleteEmployeeById(int id) {
        boolean isDeleted=false;
        if (employeeRepository.findById(id).isPresent()){
            employeeRepository.deleteById(id);
            isDeleted=true;
        }
        return isDeleted;
    }
//==========================================================================================================

    //using the findBy dynamic query creation method
    @Override
public EmployeeEntity findByFirstName(String firstName) {
    return employeeRepository.findByFirstName(firstName);
}

//using @Query and palce holder
    @Override
    public EmployeeEntity fetchByFirstName(String firstName) {
        return employeeRepository.fetchByFirstName(firstName);
    }
//
    @Override
    public List<EmployeeEntity> fetchSalaryBetween(double start, double end) {
        return employeeRepository.fetchSalaryBetween(start, end);
    }

    @Override
    public List<String> fetchAllFirstNames() {
        return employeeRepository.fetchAllFirstNames();
    }
}