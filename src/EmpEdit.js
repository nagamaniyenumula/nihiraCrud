import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function EmpEdit() {
  const {empid} =useParams();
  //const [api , setApi]=useState({})
  useEffect (()=>{
fetch("http://localhost:3000/employee/"+ empid,{

})
.then( (res)=>res.json())
.then((resp)=>{
  idchange(resp.id);
  namechange(resp.name);
  emailchange(resp.email);
  phonechange(resp.phone);
  activechange(resp.active);


})
//console.log(api)
  },[]);
    

  const[id , idchange] = useState("");
const[name , namechange] = useState("");
const[email , emailchange] = useState("");
const[phone , phonechange] = useState("");
const[active , activechange] = useState(true);
const[validation,valchange] = useState(false)
const navigate = useNavigate();

const handilsubmit=(e)=>{
    
fetch("http://localhost:3000/employee/"+empid,{
  method: "PUT",
  body: JSON.stringify({
        id:id,
        name: name,
        email: email,
        phone: phone,
        active:active,

      }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
navigate('/')
alert("saved successfully");
}

 return (
<div className='row'>
        
        <div className='offset-lg-3 col-lg-6'>
            <form  action="" className='container' onSubmit={handilsubmit}>
                <div className='card' style={{"textAlign":"left"}}>
                    <div className='card-title'>
                        <h2>Employee Edit</h2>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>ID</label>
                                    <input value={id} disabled="disabled" className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input required value={name}   onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className='form-control'/>
                                { name.length==0 && validation &&  <span className='text-danger'>enter the name</span>}
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input  value={email} onChange={e=>emailchange(e.target.value)} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input  value={phone} onChange={e=>phonechange(e.target.value)} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-check'>
                                <input required checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className='form-check-input'/>
                                    <label className='form-check-label'>Is Active</label>
                                   
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                <button className='btn btn-success' type="submit">Save</button>
                                <Link to="/" className='btn btn-danger' >Back</Link>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
 )
 }

export default EmpEdit