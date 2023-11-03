import React from 'react'
import './contact.scss'
import {CiMail} from 'react-icons/ci'
import {FiPhoneCall} from 'react-icons/fi'

import Rotate from 'react-reveal/Rotate';
const Contact = () => {
  
  return (
    <div>
        <div  className='contact'>
        <Rotate top left>
            <h1>Contactez moi</h1>
        </Rotate>

    <div className='infos_contact'>
            <div className='mail'>
                <CiMail  className='icon'/>
                <p> guibesem@gmail.com</p>
            </div>

            <div className='phone'>
                <FiPhoneCall className='icon'/>
                05-03-53-29-67
            </div>
    </div>
    </div>
    
    {/* <div className='tiret'></div>
    <p>2023 Hilink | All rights reserved</p> */}
</div>
    
 

  )
}

export default Contact