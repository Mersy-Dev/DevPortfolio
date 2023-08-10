import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolioo1.JPG'
import IMG2 from '../../assets/portfolioo2.JPG'
import IMG3 from '../../assets/portfolioo3.JPG'
import IMG4 from '../../assets/portfolioo4.JPG'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'




const data = [
  {
    id: 1,
    image: IMG1,
    title: 'A Dommy Google Meet page with (HTML, CSS, BOOTSTRAP)',
    github: 'https://github.com/Mersy-Dev/Google-meet',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Responsive Housing Site with React js',
    github: 'https://github.com/Mersy-Dev/Real-Estat',
    demo: 'https://housing-aj5.pages.dev/ '
  },
  {
    id: 3,
    image: IMG3,
    title: 'A very Responsive MERN eCommerce Food App',
    github: 'https://github.com',
    demo: 'https://minions-resturant.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'A School Management System With (MERN Application)',
    github: 'https://github.com/Mersy-Dev/School',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Chat Template & Infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-Kit-Charts-templates-infographics-in-Figma'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <div key={id}>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />

                  </div>

                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'> Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio