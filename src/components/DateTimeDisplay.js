import React from 'react';

const DateTimeDisplay = ({value, type}) => {
  return (
    <div className='countdown'>
      <p className="display">{value} {type} </p>
      
    </div>
  )
}

export default DateTimeDisplay;