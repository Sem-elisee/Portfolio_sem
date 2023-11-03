import React from 'react'
import './experience.scss'
import {PiCertificateFill} from 'react-icons/pi'
import {FaCode} from 'react-icons/fa'
import { Back, Front } from '../../constants/Data'
import Fade from 'react-reveal/Fade';


const Experience = () => {
  return (
    <div className='experience'>
                <h1>Experience</h1>
        <div className='education'>
            <div className='part-1'>
                <PiCertificateFill className='icons' />
                <h2>Education</h2>
                <Fade top>
                  <p>
                    Licence 3 en Informatique Genie Logiciel a l'universite 
                    de Technologie D'Abidjan j'ai la maitrise des bases de la 
                    programation et je suis Developeur j'aime apprendre les 
                    Technologies et m'adapter a tout
                  </p>
                </Fade>
            </div>
            <div className='part-2'>
                <FaCode className='icons' />
                    <h2>Technologies</h2>
                    <Fade top>
                    <p>
                        Ces technologie sont les meilleurs au monde et s'adapte rapidement ces pour cela que 
                        j'utilise ces technologies pour mes projets ce sont des outils les plus en vogue dans le monde du developpement Informatique 
                    </p>
                    </Fade>
            </div>
        </div>

        <div className='technologie'>
            <h1>Technologie du front-end</h1>

            <div className='data_tech'>
                {Front.map((item) => (
                    <div className='all-element'>
                        <img src={item.img} alt="logo" className='img'/>
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>

        <div className='technologie'>
            <h1>Technologie du Back-end</h1>

            <div className='data_tech'>
                {Back.map((item) => (
                    <div className='all-element'>
                        <img src={item.img} alt="logo" className='img'/>
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Experience