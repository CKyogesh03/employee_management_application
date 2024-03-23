import React, { useState } from 'react'

//error is there in this code. logic for db storage problem
// note: email and gender field stores data like interchange. so check the error 

const UpdateEmployee = () => {
    const [id,setId] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [salary, setSalary] = useState('');

    const fetchOperation = ()=>{
      const data={id,firstName,lastName,age,gender,email,job,salary}; // load this in handleSubmit() from next time
      
      try{
        fetch(`http://localhost:8080/api/v1/employees/${id}`,{
          method : "PUT",
          headers :{
            'Content-Type':'application/json'
          },
          body : JSON.stringify(data)
        })
        .then(response=>response.json)
        .then(responseData=>console.log('employee updated successfully'))
        
      }
      catch(e){
        console.log('error fetching')
      }
      
    }

  return (
    <>
      <h1>Update Employee</h1>
      <form onSubmit={(e)=>{e.preventDefault(); fetchOperation();}}>
        <input value={id} placeholder='id' onChange={(e)=>setId(e.target.value)}/>
        <input value={firstName} placeholder='firstname' onChange={(e)=>setFirstName(e.target.value)}/>
        <input value={lastName} placeholder='lastName' onChange={(e)=>setLastName(e.target.value)}/>
        <input value={age} placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
        <input value={gender} placeholder='gender' onChange={(e)=>setGender(e.target.value)}/>
        <input value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input value={job} placeholder='job' onChange={(e)=>setJob(e.target.value)}/>
        <input value={salary} placeholder='salary' onChange={(e)=>setSalary(e.target.value)}/>
        <input type='submit' value="update existing employee"/>
      </form>
    </>
  )
}

export default UpdateEmployee