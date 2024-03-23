import React, { useState, useEffect } from 'react';

const GetAllEmployeesByFirstName = () => {
    const [firstName, setFirstName] = useState('');
    const [employees, setEmployees] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/v1/employees/query/${firstName}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setEmployees([responseData]); // Assuming the response is a single employee object
        } catch (error) {
            console.error("Error:", error);
            // Optionally, show an error message
        }
    };

    return (
        <div>
            <form id="get-employees-by-firstname-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <br />
                <button type="submit">Search by First Name</button>
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

export default GetAllEmployeesByFirstName;
