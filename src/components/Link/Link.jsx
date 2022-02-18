import React from 'react';
import "./Link.scss";

const Link = () => {
  return (
    <nav className='link'>
        <ul>
            <li><a href="#">Nature</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Relaxation</a></li>
            <li><a href="#">Vacation</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Adventure</a></li>
        </ul>
    </nav>
  )
}

export default Link