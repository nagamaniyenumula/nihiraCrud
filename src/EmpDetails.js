import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EmpDetails() {
  const {empid} =useParams();
  const [api , setApi]=useState({})
  useEffect (()=>{
fetch("http://localhost:3000/employee/"+ empid)
.then( (res)=>res.json())
.then((res)=>setApi(res))
console.log(api)
  },[]);
  return (
    <div>
      <h3>Name : {api.name} </h3>
      <h3>Ph : {api.phone}</h3>
      <h3>Email : {api.email}</h3>
       </div>
  )
}

export default EmpDetails