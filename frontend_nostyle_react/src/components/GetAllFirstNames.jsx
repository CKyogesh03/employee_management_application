import React, { useState, useEffect } from 'react';

const GetAllFirstNames = () => {
    const [firstNames, setFirstNames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/employees/allFirstNames')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFirstNames(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Get All Employee First Names</h1>
            <ul>
                {firstNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GetAllFirstNames;
