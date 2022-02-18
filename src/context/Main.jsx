import React from 'react';
import './Main.scss'
import Centerword from '../components/Centerword/Centerword';
import Text from '../components/Text/Text';
import Featured from './Featured';

const Main = () => {
  return (
    <div className='main'>
          <Centerword title={'Featured Posts'}/>
          <Featured/>
          <Centerword title={'Most Recent'}/>

    </div>
  )
}

export default Main