import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {

    const navigate = useNavigate();
  return (
    <div className='home'>
       
       <Link className='Logout' to="/login" type='submit' variant="primary" size="lg">
        Logout
      </Link>
       
        
    </div>
  )
}

export default Home