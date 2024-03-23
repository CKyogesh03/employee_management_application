import React, { useState } from 'react';

const DeleteEmployee = () => {
    const [employeeId, setEmployeeId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/v1/employees/${employeeId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
            // Optionally, clear the input field or show a success message
            setEmployeeId('');
        } catch (error) {
            console.error("Error:", error);
            // Optionally, show an error message
        }
    };

    return (
        <form id="delete-employee-form" onSubmit={handleSubmit}>
            <h1>Delete Employee By Id</h1>
            <label htmlFor="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
            <br />
            <button type="submit">Delete Employee</button>
        </form>
    );
};

export default DeleteEmployee;
