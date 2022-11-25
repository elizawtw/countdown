import React from 'react';
import CountdownTimer from './components/CountdownTimer';

const App = () => {
  const desireDate = new Date('12/25/2022, 00:00:00 AM').getTime();
  console.log(desireDate)
  return (
    <div>
      <CountdownTimer targetDate={desireDate} />
    </div>
  )
}

export default App;