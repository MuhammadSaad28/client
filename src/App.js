import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (

    <div className='App'>

     <Router>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
     </Router>

    

    </div>
  )
}

export default App