import React, { useState } from 'react';

const UpdateEmployee = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            firstName,
            lastName,
            age,
            gender,
            email,
            job,
            salary
        };

        try {
            const response = await fetch(`http://localhost:8080/api/v1/employees/${employeeId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form id="update-employee-form" onSubmit={handleSubmit}>
            <h1>Update Employee By ID</h1>
            <label htmlFor="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
            <br />
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <br />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
            <br />
            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <label htmlFor="job">Job:</label>
            <input type="text" id="job" name="job" value={job} onChange={(e) => setJob(e.target.value)} required />
            <br />
            <label htmlFor="salary">Salary:</label>
            <input type="number" id="salary" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
            <br />
            <button type="submit">Update Employee</button>
        </form>
    );
};

export default UpdateEmployee;
