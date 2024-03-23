import React, { useState, useEffect } from 'react';

const GetEmployeesBySalaryRange = () => {
    const [startSalary, setStartSalary] = useState('');
    const [endSalary, setEndSalary] = useState('');
    const [employees, setEmployees] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/v1/employees/query/bySalary/${startSalary}/${endSalary}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setEmployees(responseData);
        } catch (error) {
            console.error("Error:", error);
            // Optionally, show an error message
        }
    };

    return (
        <div>
            <form id="get-employees-by-salary-range-form" onSubmit={handleSubmit}>
                <h1>Get Employees By Salary Range</h1>
                
                <label htmlFor="startSalary">Start Salary:</label>
                <input type="number" id="startSalary" name="startSalary" value={startSalary} onChange={(e) => setStartSalary(e.target.value)} required />
                <br />
                <label htmlFor="endSalary">End Salary:</label>
                <input type="number" id="endSalary" name="endSalary" value={endSalary} onChange={(e) => setEndSalary(e.target.value)} required />
                <br />
                <button type="submit">Search by Salary Range</button>
            </form>
            {employees.length > 0 && (
                <div>
                    <h2>Employees Found:</h2>
                    <ul>
                        {employees.map(employee => (
                            <li key={employee.id}>
                                {employee.firstName} {employee.lastName} - {employee.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default GetEmployeesBySalaryRange;
