import React, { useState } from 'react';

const CreateEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        //when submitting, entered datas are loaded in the states so just create one object with all states
        const data = {
            firstName,  //value is updating whenever onchange occurs in firstName.
            lastName,
            age,
            gender,
            email,
            job,
            salary
        };

        try {
            const response = await fetch("http://localhost:8080/api/v1/employees", {
                method: "POST",
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
        <form id="employee-form" onSubmit={handleSubmit}>
          <h1>Create Employee</h1>
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateEmployee;
