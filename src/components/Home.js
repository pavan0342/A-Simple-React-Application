import React, { useState, useEffect } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `Home Page - Counter: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="counter">
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Home;


