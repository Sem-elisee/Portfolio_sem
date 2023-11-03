import React, { useState } from 'react'
import './header.scss'
import {HiMenuAlt4 } from "react-icons/hi"
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

import { link } from '../constants/Data'
import { Link } from 'react-router-dom'
import{IoClose} from 'react-icons/io5'

import Flip from 'react-reveal/Flip';

const Header = () => {

    const [show, setshow] = useState(false)

    console.log(show);

  return (
     <nav>
        <div className='nav'>
            <div className='name'>
                <h1>Guibe Sem</h1>
            </div>

            <div className={!show? 'information': 'links'}>
                    {link.map((element) => (
                       <>
                       <Link to={element.path} className='link'>
                            <h3 className='title'>{element.title}</h3>
                       </Link>
                       </>
                    ))}
                <IoClose className="close" onClick={() =>setshow(false)}/>


               
            </div>
        
            <HiMenuAlt4 className='icons' onClick={() => setshow(true)}/>
                
        </div>

        <div className='descripction'>
                 <img src={require('../assets/img (3).png')} alt=""  className='heaer_img'/>
            <div className='more_information'>
                <Flip bottom>
                    <p>Coucou j'suis</p>
                    <h1>Guibe Sem </h1>
                    <h3 className='title_h3'>Developeur fullstack</h3>
                </Flip>
                <div className="button">
                    <Link to='/experience' className='button1'>Experience</Link>
                    <Link to='/contact'className='button2' >Contact Info</Link>
                </div>

                <div className='socials'>
                    <Link to='https://www.instagram.com/sem.elisee/?hl=fr' target="_blank" rel="noopener noreferrer">
                        <FiInstagram className='icon' />
                    </Link>
                   
                    <Link to="https://github.com/Sem-elisee" target="_blank" rel="noopener noreferrer">
                        <BsGithub className='icon'/>
                    </Link>
                    
                </div>
            </div>
        </div>
     </nav>
  )
}

export default Header