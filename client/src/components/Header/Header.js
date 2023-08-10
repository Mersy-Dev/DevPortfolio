import React from 'react'
import './header.css'
import CTA from './CTA.js'
import ME from '../../assets/meeii.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>MERCY DEV</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <div className='  '>
                        <img src={ME} alt="me" className='' />

                    </div>
                </div>
                <a href="#contact" className='scroll__down'>Scroll Dowm</a>
            </div>
        </header>

    )
}

export default Header