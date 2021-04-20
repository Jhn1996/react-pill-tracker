
import { useState, useEffect } from 'react';
// import Moment from 'react-moment';
function Clock(props) {
  const [date, setDate] = useState(new Date());

 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }

   return (
      <div>
        <h3>{date.toLocaleTimeString()}</h3>
      </div>
    )
}

export default Clock