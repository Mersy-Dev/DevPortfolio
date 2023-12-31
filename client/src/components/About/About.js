import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUser} from 'react-icons/fi'
import { VscFolderLibrary} from 'react-icons/vsc'






const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUser className='about__icon' />
              <h5>clients</h5>
              <small>15+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p> Talented Software Developer equipped with great coding, debuggingand project management abilities. Accomplishes project goalsconsistently with elegant, scalable code. Works great with teammembers under Agile and Scrum frameworks. Highly-motivated withdesire to take on new challenges. Adept at working effectivelyunsupervised and quickly mastering new skills.</p>
          <a href="#contact" className='btn btn-primary'> Lets Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About