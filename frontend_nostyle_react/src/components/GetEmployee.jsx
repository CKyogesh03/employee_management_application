import React, { useState, useEffect } from 'react';

const GetEmployee = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [employee, setEmployee] = useState(null);

    const fetchEmployeeDetails = () => {
        if (employeeId.trim() === '') {
            alert('Please enter an employee ID');
            return;
        }

        const apiUrl = `http://localhost:8080/api/v1/employees/${employeeId}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEmployee(data);
            })
            .catch(error => {
                console.error('Error fetching employee details:', error);
            });
    };

    return (
        <div>
            <h1>Employee Details</h1>

            <form onSubmit={(e) => { e.preventDefault(); fetchEmployeeDetails(); }}>
              <h1>Get Employee By ID</h1>
                <label htmlFor="employeeId">Employee ID:</label>
                <input
                    type="text"
                    id="employeeId"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    required
                />
                <button type="submit">Fetch Details</button>
            </form>

            {employee && (
                <div id="employeeDetails">
                    <h2>Employee Details</h2>
                    <p><strong>ID:</strong> {employee.id}</p>
                    <p><strong>First Name:</strong> {employee.firstName}</p>
                    <p><strong>Last Name:</strong> {employee.lastName}</p>
                    <p><strong>Age:</strong> {employee.age}</p>
                    <p><strong>Gender:</strong> {employee.gender}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Job:</strong> {employee.job}</p>
                    <p><strong>Salary:</strong> {employee.salary}</p>
                </div>
            )}
        </div>
    );
};

export default GetEmployee;
