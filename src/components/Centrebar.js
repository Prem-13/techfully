
import './centrebar.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Centrebar() {
  return (
   <div className='centreContainer'>
    <div className='CentreBanner'>
      <img src='assets/vehicle.jpg' className='profileImg' alt=''></img>
      <span className='profileText'>Johny Makelele</span>
      <span className='profileText2'>Lagos,Nigeria</span>
<div className='searchBar'> 
      <input placeholder='search' className='searchText'></input>
      <AiOutlineSearch className='searchIcon'/>
      </div>
     

      <span className='headingText'>Courses</span>
      <span className='paraText'>see all</span>
    </div>
    
      
    
    <div className='navBar'>
      <span className='alltext'>All</span>
      <span className='currenttext'>Current</span>
      <span className='pendingtext'>Pending</span>
      <span className='completedtext'>Completed</span>
    </div>
    <div className='studyTable'>
      <div className='java'>
      <div className='imgDiv1'>
        <img src='assets/javalogo.png' className='javaImg' alt=''></img>
      </div>  
        <span className='date'>programming oct28,2022</span>
        <span className='javaText'>Object = oriented</span>
        <span className='javaText'>programming in java</span>
        <div className='divPlay'>
          <img src='assets/playlogo.png' className='playImg' alt=''></img>
          <span className='spanResume'>Resume</span>
        </div>
      </div>
    </div>
    <div className='studyTable2'>
      <div className='study'>
        <span className='studyText'>How to track your </span>
        <span className='studyText1'>course progress easily?</span>
        <p className='textFind'>Find more.. </p>
        
      </div>
    </div>

    <div className='studyTable3'>
      <div className='flux'>

        <div className='imgDiv'>
          <img src='assets/flux.png' className='fluxImg' alt=''></img>
        </div>
        
        <span className='date2'>Design sept 09,2022</span>
        <span className='fluxText'>Visual Elements of User </span>
        <span className='fluxText'>Interface Design</span>
      
      </div>
    </div>
    
    <div className='studyTable4'>
      <div className='social'>

        <div className='imgDiv2'>
          <img src='assets/social.webp' className='socialImg' alt=''></img>
        </div>
        
        <span className='date3'>marketing sept 09,2022</span>
        <span className='fluxText1'>The Strategy of </span>
        <span className='fluxText2'>Content Marketing</span>
        
      
      </div>
    </div>
    <div className='cornerdiv'>
          <img src='assets/R.png'></img>
        </div>

   </div>
    
     





  
)
}

export default Centrebar