import React from 'react';
import './Text.scss';

const Text = ({title}) => {
  return (
    <p className='text'>{title}</p>
  )
}

export default Text