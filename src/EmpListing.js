import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function EmpListing() {
    
   const [apiData , setApiData]=useState([])
    useEffect(()=>{
        getapi();
       
    },[])
    function getapi(){
        fetch("http://localhost:3000/employee")
        .then((res)=> res.json())
        .then((res)=>setApiData(res))
        .catch((err)=>{
            console.log(err.message)
        })
    }
    const navigate = useNavigate();
    const userdetails =(id)=>{
        navigate("/employee/detailes/"+id)
    }
    const useredit = (id)=>{
        navigate("/employee/edit/"+id)
    }
    const userdelete =(id)=>{
   
    fetch('http://localhost:3000/employee/' + id, {
  method: 'DELETE',
})
.then(res => res.json()) // or res.json()
.then(res => console.log(res));
// getapi();
    }
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-tittle'>
                <h2>Employee Listing</h2>
            </div>
            <div className='card-body'>
                <div>
                    <Link to="employee/create" className='btn btn-success'> Add New(+)</Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.map(item =>{
                                return(   <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    {/* <td>{item.action}</td> */}
                                    <td>
                                    <a onClick={()=>{useredit(item.id)}}  className='btn btn-success'>Edit</a>
                                    <a onClick={()=>{userdelete(item.id)}} className='btn btn-danger'>Remove</a>
                                    <a onClick={()=>{userdetails(item.id)}} className='btn btn-primary'>Details</a>
                                    
                                    </td>
                                </tr>)
                             
                            })
                        }
                          {/* {
                apiData.map((item)=>{
                            return(
                                <>
                                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    </tr>
    </>
)
                })
             } */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default EmpListing