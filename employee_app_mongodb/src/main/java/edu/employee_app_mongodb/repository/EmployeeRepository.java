package edu.employee_app_mongodb.repository;

import edu.employee_app_mongodb.entity.EmployeeEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends MongoRepository<EmployeeEntity,Integer> {

}
