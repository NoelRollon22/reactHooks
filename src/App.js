import React, { useState, useEffect }from 'react';


function App() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
    }
  });

  return (
    <div className="App">
        <h1>Count down from 10: {seconds}</h1>
    </div>
  );
}

export default App;

