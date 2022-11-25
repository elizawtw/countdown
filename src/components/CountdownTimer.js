import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import ExpiredNotice from './ExpiredNotice';
import ShowCount from './ShowCount';

const CountdownTimer = ({targetDate}) => {
  const [days, hours, mins, secs] = useCountdown(targetDate);

  if(days + hours + mins + secs <= 0) {
    return <ExpiredNotice />
  } else {
    return <ShowCount 
      days={days}
      hours={hours}
      mins={mins}
      secs={secs}
    />
  }

}

export default CountdownTimer;