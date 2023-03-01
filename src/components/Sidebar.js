import React from 'react'
import './sidebar.css'
import {BiRadioCircle} from 'react-icons/bi'
import {TbBooks} from 'react-icons/tb'
import {MdPayment} from 'react-icons/md'
import {IoIosChatbubbles, } from 'react-icons/io'
import {IoTelescopeOutline} from 'react-icons/io5'
import {FaUserGraduate} from 'react-icons/fa'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {RiLogoutBoxRLine} from 'react-icons/ri'

function Sidebar() {
  return (
    <div className='containerSidebar'>
      <div className='titleDiv'>
        <BiRadioCircle className='techIcon'/>
               <span className='techTitle'>TaskTechfully</span>
      </div>
      <div className='sideWrapper1'>
            <TbBooks className='courseIcon'/>
            <span className='spanCourse'>Courses</span>
      </div>
      <div className='sideWrapper'>
            <MdPayment className='sideICon'/>
            <span className='sideText'>Payments</span>
      </div>
      <div className='sideWrapper'>
           <IoIosChatbubbles className='sideIcon'/>
           <span className='sideText'>Chats</span>
           <span className='sideIconBadge'>3</span>
      </div>
      <div className='sideWrapper'>
           <IoTelescopeOutline className='sideIcon'/>
           <span className='sideText'>Groups</span>
      </div>
      <div className='sideWrapper'>
           <FaUserGraduate className='sideIcon'/>
           <span className='sideText'>Students</span>
      </div>
      <div className='sideWrapper'>
           <AiOutlineQuestionCircle className='sideIcon'/>
           <span className='sideText'>Support</span>
      </div>
      <div className='sidePic'>
        <img src='assets/trophy.png' alt='' className='sideImg'/>
      </div>

      
      <RiLogoutBoxRLine  className='logoutIcon'/>
        <button className='logoutText'>Logout</button>
      
    </div>
 


  )
}

export default Sidebar