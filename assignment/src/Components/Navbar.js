import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"center", gap:"25px"}}>
    <Link to="/">Quiz</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
   
    </div>
  )
}

export default Navbar