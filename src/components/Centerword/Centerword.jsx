import React from 'react'
import './Centerword.scss'
const Centerword = ({title}) => {
  return (
    <div className='center'>
        <p>{title}</p>
        <hr />
    </div>
  )
}

export default Centerword