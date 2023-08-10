import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';


// import Swiper core and required modules
import { Pagination  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Smith',
    review: "I would not hesitate to work with Mercy again. His attitude, availability, communication, and responsibility were among the best I've worked with."

  },
  {
    avatar: AVTR2,
    name: 'Josh Andrew',
    review: "Mercy is a very talented coder, super fast and efficient. He can handle any complex coding challenge. I hope to work with him again, and definitely recommend him for any task."
  },
  {
    avatar: AVTR3,
    name: 'John.S Code',
    review: "Thanks Mercy! It was great to work with you and I hope we can work together again sometime in the future!"

  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>



      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>

                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                {review}

                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials