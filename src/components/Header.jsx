import React from 'react'
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div>
      <div>
        {/*--------LEFT SIDE-------- */}
        <p>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p></p>
        </div>
      </div>
      <div>
        {/*--------RIGHT SIDE-------- */}
        
      </div>
    </div>
  );
}

export default Header