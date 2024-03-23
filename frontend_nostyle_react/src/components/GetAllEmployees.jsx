import React, { useState, useEffect } from 'react';

const GetAllEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/employees')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEmployees(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        ID: {employee.id}, Name: {employee.firstName} {employee.lastName}, Age: {employee.age}, Gender: {employee.gender}, Email: {employee.email}, Job: {employee.job}, Salary: {employee.salary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetAllEmployees;
