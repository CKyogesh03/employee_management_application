import React, { useState } from 'react'

// no need form bcoz we are not taking any input from the user
export const GetAllEmployees = () => {
    const [employees,setEmployees] = useState([])  //array of objects
    const fetchOperation = ()=> {
        fetch(`http://localhost:8080/api/v1/employees`)
        .then(response=>response.json())
        .then(responseData=>setEmployees(responseData))
    }
  return (
    <>
        <h1>GetAllEmployees</h1>
        <button onClick={fetchOperation}>fetch all employees</button>
        
        {employees && 
        <ul>
        {employees.map(employee =>
         (
            <li key={employee.id}>
                {employee.id},{employee.firstName},{employee.lastName},{employee.age},{employee.gender},{employee.email},{employee.job},{employee.salary}
            </li>
         )
        )}
        </ul>

        }
    </>
  )
}
