import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProfileInfo from './ProfileInfo'
import Counter from './Counter'
import EventHandling from './EventHandling'
import MapandKey from './MapandKey'
import Hideandshow from './Hideandshow'
import Clock from './Clock'
import UserList from './New'
import { Routes,Route,Link } from 'react-router-dom'
function App(){
    return (
      <div>
         <nav>
         <Link to="/clock">Clock</Link>
       </nav>
        <Routes>
          <Route path="/clock" element={<Clock/>}></Route>
        </Routes>
        <ProfileInfo id="1" name="Dinisha" role="Software developer"/>
        <ProfileInfo id="2" name="Priya" role="Designer"/>
        <ProfileInfo id="3" name="Divya" role="Software QA"/>
        <Hideandshow />
        <Clock/>
        <UserList />
        

       
      </div>
    )

}
export default App