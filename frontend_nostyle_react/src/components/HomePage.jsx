import React from 'react'
import CreateEmployee from './CreateEmployee'
import GetEmployee from './GetEmployee'
import GetAllEmployees from './GetAllEmployees'
import UpdateEmployee from './UpdateEmployee'
import DeleteEmployee from './DeleteEmployee'
import GetEmployeesByFirstName from './GetEmployeesByFirstName'
import GetAllFirstNames from './GetAllFirstNames'
import GetEmployeesBySalaryRange from './GetEmployeesBySalaryRange'

const HomePage = () => {
  return (
    <>
    <h1>HomePage</h1>
    <GetAllEmployees/>  // used to monitor the changes occurs in table directly by fetching data
    <hr/>
{/* ================================= */}
    <GetEmployee/>
    <hr/>
    <CreateEmployee/>
    <hr/>
    <UpdateEmployee/>
    <hr/>
    <DeleteEmployee/>
    <hr/>
    <GetEmployeesByFirstName/>
    <hr/>
    <GetAllFirstNames/>
    <hr/>
    <GetEmployeesBySalaryRange/>
    </>
    
  )
}

export default HomePage