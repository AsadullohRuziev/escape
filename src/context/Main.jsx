import React from 'react';
import './Main.scss'
import Centerword from '../components/Centerword/Centerword';
import Text from '../components/Text/Text';
import Featured from './Featured';
import Most from './Most';

const Main = () => {
  return (
    <div className='main'>
          <Centerword title={'Featured Posts'}/>
          <Featured/>
          <Centerword title={'Most Recent'}/>
          <Most/>

    </div>
  )
}

export default Main