import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
        <Sidebar value={1}></Sidebar>
        <div className="Dashboard-container">
            <h1>Dashboard</h1>
            <div className="cards-container">
                <div className="card">
                    <h3>Total Tickets</h3>
                    <p>12</p>
                </div>
                <div className="card">
                    <h3>Total Solved</h3>
                    <p>8</p>
                </div>

                <div className="card">
                    <h3>Total Awaiting Approval</h3>
                    <p>2</p>
                </div>

                <div className="card">
                    <h3>Total in Progress</h3>
                    <p>2</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero