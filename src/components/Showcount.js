import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const ShowCount = ({days, hours, mins, secs}) => {
  return (
    <div className="show-counter">
      
      <DateTimeDisplay value={days} type={'days'}  />
      
      <DateTimeDisplay value={hours} type={'hours'}  />
      
      <DateTimeDisplay value={mins} type={'mins'}  />
      
      <DateTimeDisplay value={secs} type={'secs'}  />
      
    </div>
  )
}

export default ShowCount;