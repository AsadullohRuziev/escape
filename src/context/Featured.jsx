import React from 'react'
import CardBig from '../components/CardBig/CardBig'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
        <CardBig/>
        <CardBig/>
    </div>
  )
}

export default Featured