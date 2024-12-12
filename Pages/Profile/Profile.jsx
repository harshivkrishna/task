import {React} from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import profile from '../../src/assets/profile.svg'
import edit_icon from '../../src/assets/edit_icon.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
        const [rating, setRating] = useState(0);
      
        const handleStarClick = (index) => {
          setRating(index + 1);
        };
  return (
    <div>
        <Navbar></Navbar>
        <div>
        <div className='profile-container'>
            <Sidebar value={4}></Sidebar>
            <div className='profile-inner-container'>
                <h1>User Profile</h1>
                <div className='profile-wrap-container'>
                    <div className='logo-container'>
                        <Link to={'/profile/edit'}><img src={edit_icon} className='edit-icon' alt="" /></Link>
                        <div className='profile-img-container'>
                            <img src={profile} className='profile-img' alt="" />
                        </div>
                        <p>Username</p>
                        <p>Contact Number</p>
                        <p>Email</p>
                        <p>Department</p>
                    </div>
                    <div className="feedback-container">
                            <p>Give Your Feedback</p>
                            <input type="text" placeholder='Feedback' />
                            <div className='star-container'>
                            {[...Array(5)].map((_, index) => (
                                <i
                                key={index}
                                className={`bx bxs-star ${index < rating ? 'active' : ''}`}
                                onClick={() => handleStarClick(index)}
                                style={{ cursor: 'pointer', color: index < rating ? '#FFD700' : 'gray' }}
                                ></i>
                            ))}
                            </div>
                            <button className='feedback-btn'>Submit Feedback</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile