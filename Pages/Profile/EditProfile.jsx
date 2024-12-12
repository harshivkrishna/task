import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './EditProfile.css'

const EditProfile = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div>
        <div className='edit-profile-section'>
            <Sidebar></Sidebar>
            
            <div className='edit-profile-container'>
                <h1>User profile</h1>
                <p>Edit Account</p>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default EditProfile