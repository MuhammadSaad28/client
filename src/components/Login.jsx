import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import './Login.css';
function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const navigate = useNavigate();

  const HandleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:2500/login" , {email,password})
    .then(result=>{console.log(result)
      if(result.data == "Success"){
        navigate('/home')
      }else{
        setMessage(result.data)
      }
 })
    .catch(error=>console.log(error))
 }
  return (
    <div className='Login'>
      
      <Form onSubmit={HandleSubmit}>
<h1>Login </h1>

    
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      </Form.Group>

      <h6 id='message'>{message}</h6>
      
      <Button type='submit' variant="primary" size="lg">
        Login
      </Button>

      <h5>Don't Have an Account?</h5>

      <Link to="/register" className='Button' variant="primary" size="lg">
        Register
      </Link>
      
    
    </Form>

    </div>
  )
}

export default Login