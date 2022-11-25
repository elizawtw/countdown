import {useState, useEffect} from 'react';


const useCountdown = (targetDate) => {
 const expiryDate = new Date(targetDate).getTime();
 const currentDate = new Date().getTime();

 const [countdown, setCountdown] = useState(expiryDate - currentDate);

 useEffect (() => {
  const timeInterval = setInterval(()=>{
    setCountdown(expiryDate - currentDate);
  }, 1000);
  return clearInterval(timeInterval);
 }, [expiryDate])
 return getReturnCount(countdown);
};

const getReturnCount = (countdown) => {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  const mins = Math.floor((countdown % (1000 * 60 * 60))/ (1000 * 60));
  const secs = Math.floor((countdown % (1000 * 60)) / 1000);

  return [days, hours, mins, secs];
}

export {useCountdown};