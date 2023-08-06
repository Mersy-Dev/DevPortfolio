import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ad veritatis ab similique voluptas minima dolorum, nobis vero, doloremque suscipit nesciunt asperiores hic quasi ut neque repudiandae? Aperiam, soluta molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          <a href="#contact" className='btn btn-primary'> Lets Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About