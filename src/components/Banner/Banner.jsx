import React from 'react'
import {  slideLeft, slideRight } from './Slide'
import './Banner.css'
import left from '../../assets/left-arrow.svg'
import right from '../../assets/right-arrow.svg'
import { baner } from '../../assets/assets'

const Banner = () => {
  return (
    <div className='Banner_image_container'>
        <div className='Banner_container_image'>
          <div className='arrow_container'>
              <div onClick={slideLeft} className='slideLeft'><img src={left} alt="" /></div>
              <div onClick={slideRight} className='slideRight'><img src={right} alt="" /> </div>
          </div>
            <img
              className='Banner_image DB'
              src={baner.gamingstore}
              alt='Banner'
            />
            <img
              className='Banner_image'
              src={baner.bookstore}
              alt='Banner'
            />
            <img
              className='Banner_image'
              src={baner.kitchen_favorite}
              alt='Banner'
            />

            <img
              className='Banner_image'
              src={baner.toys}
              alt='Banner'
            />
            <img
              className='Banner_image'
              src={baner.beauty}
              alt='Banner'
            />

          </div>
        </div>
  )
}

export default Banner

