import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to={'/dashboard'} className='link'><h2>HelpDesk</h2></Link>
        <div className="controls">
            <div className="box">
                <p>BM</p>
                <p>BI</p>
            </div>
              <Link><box-icon type='solid' name='bell'></box-icon></Link>
              <Link to={'/profile'}><box-icon type='solid' name='user'></box-icon></Link>
              <Link><box-icon name='log-in'></box-icon></Link>
        </div>
    </nav>
  )
}

export default Navbar