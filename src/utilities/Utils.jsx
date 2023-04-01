import { useState, useEffect, useRef } from 'react'


function CalculateTimeLeft(props) {
  const [time, setTime] = useState(props.duration);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      clearInterval(intervalRef.current)

    }
  }, [time]);

  const intervalRef = useRef();

  return <p>{time}</p>;
}

export default CalculateTimeLeft