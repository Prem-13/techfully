import React, { useState } from 'react'
import './rightbar.css'
import {BsMoon} from 'react-icons/bs'


function Rightbar() {
 

  return (
    <div className='containerRightbar'>
     
           <span className='spanDark' >
           <BsMoon className='moonIcon'/>Switch to dark</span>
      
     <div className='banner'>
      <h4 className='rightHeading'>Schedule</h4>
      <span className='rightDate'>Thursday 04 march,2022</span>
      <div className='monthDiv'>
      <select>
        <option className='optionText'>March</option>
      </select>
      </div>
     </div>

 <ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li><span class="active">4</span></li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
 
</ul>
 <div className='upcomingDiv'>
  <h4 className='headingUpcoming'>Upcoming Classes</h4>
  <div className='rightUp'>
    <h5 className='rightText'>Up-Next</h5>
    <div className='rightTiming'>
    <div className='studyTable3Right'>
      <div className='fluxRight'>

        <div className='imgDivRight'>
          <img src='assets/flux.png' className='fluxImgRight' alt=''></img>
        </div>
        
        <span className='dateRight'>10.00 - 10.30</span>
        <span className='fluxTextRight'>User Interface Design</span>
      
      </div>
    </div>
    </div>
  </div>
<hr className='hrLine'></hr>
 </div>
       <div className='afterText'>
           <h4 className='afterText1'>After</h4>
           
              <div className='studyAfter6'>

                <div className='fluxAfter1'>
                    <div className='imgAfter1'>
                        <img src='assets/math.png' className='fluxImgAfter1' alt=''></img>
                    </div>
                       <span className='dateAfter1'>10.00 - 10.30</span>
                       <span className='fluxTextAfter1'>Discrete math for absolute beginners</span>
                </div>
                <div className='fluxAfter2'>
                    <div className='imgAfter2'>
                        <img src='assets/media.png' className='fluxImgAfter2' alt=''></img>
                    </div>
                       <span className='dateAfter2'>10.00 - 10.30</span>
                       <span className='fluxTextAfter2'>Meditation of marcus Aurellius</span>
                </div>

                <div className='fluxAfter3'>
                    <div className='imgAfter3'>
                        <img src='assets/op.webp' className='fluxImgAfter3' alt=''></img>
                    </div>
                       <span className='dateAfter3'>10.00 - 10.30</span>
                       <span className='fluxTextAfter3'>Atlantis and younger Dryas</span>
                </div>

                
              </div>
       </div>
           

    </div>
  )
}

export default Rightbar