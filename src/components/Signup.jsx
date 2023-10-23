import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios'
function Signup() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const HandleSubmit = (e)=>{
       e.preventDefault();
       axios.post("http://localhost:2500/register" , {name,email,password})
       .then(result=>{console.log(result)
     navigate('/login')
    })
       .catch(error=>console.log(error))
    }

    return (
    <div className='Signup'>

        

<Form onSubmit={HandleSubmit}>
<h1>Register </h1>
<Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)}/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button type='submit' variant="primary" size="lg">
       Register
      </Button>

      <h5>Already Have an Account?</h5>

      <Link className='Button' to='/login' variant="primary" size="lg">
        Login
      </Link>
      
    
    </Form>


    </div>
  )
}

export default Signup