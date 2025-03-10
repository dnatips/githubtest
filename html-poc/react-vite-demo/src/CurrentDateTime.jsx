import { useState, useEffect } from 'react'

export default function CurrentDateTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Current DateTime</h1>
      <div>The time right now is {time.toLocaleString()}</div>
    </>
  )
}
