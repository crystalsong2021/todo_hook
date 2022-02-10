import React, { Componenet, useState, useEffect } from 'React';

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  useEffect(()=> {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p> You clicked {count} times</p>
      <button onClick={incrementCount}> click me</button>
    </div>
  )
}

export default Counter;

