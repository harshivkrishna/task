import React, { useState } from 'react'
import './Sidebar.css'
import arrow from '../../src/assets/Vector.svg'
import Dashboard from '../../src/assets/Dashboard Layout.svg'
import newTicket from '../../src/assets/New Ticket.svg'
import myTicket from '../../src/assets/Two Tickets.svg'
import { Link } from 'react-router-dom'

const Sidebar = ({value}) => {
    const viewIndex = value;
  return (
    <div className='sidebar'>
        <div className="list">
            <div>
            {viewIndex===1 && <img src={arrow} className='arrow'/>}
            <Link className='link' to='/dashboard' onClick={()=>{setViewIndex(1)}}>
            <div className="item" >
                <img src={Dashboard} alt="" className='sidebar-icon'/>
                <p>Dashboard</p>
            </div>
            </Link>
            </div>

            <div>
            {viewIndex===2 && <img src={arrow} className='arrow'/>}
            <Link className='link' to='/newticket' onClick={()=>{setViewIndex(2)}}>
            <div className="item">
                <img src={newTicket} alt="" className='sidebar-icon'/>
                <p>New Ticket</p>
            </div>
            </Link>
            </div>

            <div>
            {viewIndex===3 && <img src={arrow} className='arrow'/>}
            <Link className='link' to='/mytickets' onClick={()=>{setViewIndex(3)}}>
            <div className="item" >
                <img src={myTicket} alt="" className='sidebar-icon'/>
                <p>My Ticket</p>
            </div></Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar