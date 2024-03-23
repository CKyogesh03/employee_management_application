import React from 'react'
import GetEmployee from './GetEmployee'
import { GetAllEmployees } from './GetAllEmployees'
import CreateEmployee from './CreateEmployee'
import UpdateEmployee from './UpdateEmployee'

const PracticingApi = () => {
  return (<>
    <h1>PracticingApi</h1>
    <GetEmployee/>
    <hr/>
    <GetAllEmployees/>
    <hr/>
    <CreateEmployee/>
    <hr/>
    <UpdateEmployee/>
    </>
  )
}

export default PracticingApi