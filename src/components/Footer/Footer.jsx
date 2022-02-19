import React from 'react'
import './Footer.scss'
import { ImgFooter } from '../../utils/footer'
import Centerword from '../Centerword/Centerword'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={ImgFooter} alt="Foter" />
        <div className='footer__content'>
            <Centerword className='footerde' title={'Stay in Touch'}/>
            <div className='input__box'>
                <input type="text" placeholder='Enter your email address'/>
                <button className='btn'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Footer