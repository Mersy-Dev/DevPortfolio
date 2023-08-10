import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>



      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Services</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing software workflow.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
          </ul>

        </article>

        {/* UI/UX END  */}



        <article className="service">
          <div className="service__head">
            <h3>Back-End Services</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of user-facing elements developed by a front-end developers with server side logic.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building reusable code and libraries for future use</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimization of the application for maximum speed and scalability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementation of security and data protection.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient understanding of code versioning tools, such as Git.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design and implementation of data storage solutions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating database schemas that represent and support business processes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing automated testing platforms and unit tests.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Debug and troubleshoot apps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify new features, communicate effectively with developers, designers, and system administrators.</p>
            </li>
            
          </ul>

        </article>

        {/* END OF WEB-DEV */}


        <article className="service">
          <div className="service__head">
            <h3>Fullstack Services</h3>
          </div>

          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing documentation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient understanding of code versioning tools, such as Git.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Development & Integration Services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend and Backend Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dedicated Full Stack Developers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

        </article>

        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  )
}

export default Services