import { useState } from "react"

const GetEmployee = ()=>{
    const [id,setId] = useState('')
    const [employee,setEmployee] = useState(null) // it is single object so dont use array methods

    const fetchOperation = ()=>{
        try{
            fetch(`http://localhost:8080/api/v1/employees/${id}`)
            .then(response=>response.json())
            .then(responseData=>setEmployee(responseData))
        }
        catch(e){
            console.log("error fetching")
        }
    }
    return (
        <>
        <h1>Get Employee by id</h1>
        <form onSubmit= {(e)=>{e.preventDefault();fetchOperation()} }>
            <input placeholder="employee id" onChange={(e)=>setId(e.target.value)}/>
            <input type="submit" value="fetch now"/>
        </form>
        {employee && 
        (<p>{employee.id},{employee.firstName},{employee.lastName},{employee.age},{employee.gender},{employee.email},{employee.job},{employee.salary}</p>)}
        </>
    )
}
export default GetEmployee