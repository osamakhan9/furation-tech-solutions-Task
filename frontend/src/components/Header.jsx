import React from 'react'
import { Link } from "react-router-dom";
import './CSS/style.css'
const Header = () => {
  return (
    <div className='navbar'>

      <div className="logo">

        <h1>Bus Ticket</h1>
      </div>

      <div className="login_btn">

      <Link to="/login">Login</Link>
        
      </div>
    </div>
  )
}

export default Header
