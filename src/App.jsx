import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import NewTicket from '../Pages/NewTicket/NewTicket'
import Profile from '../Pages/Profile/Profile'
import EditProfile from '../Pages/Profile/EditProfile'
import MyTicket from '../components/MyTicket/MyTicket'
import Home from '../Pages/Home/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/newticket' element={<NewTicket></NewTicket>}></Route>
        <Route path='/mytickets' element={<MyTicket></MyTicket>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/profile/edit' element={<EditProfile></EditProfile>}></Route>
      </Routes>
    </div>
  )
}

export default App