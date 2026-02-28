import { useCallback, useState } from "react";
import React from "react";

const Child = React.memo(
    function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // NEW function every render
  const handleClick = useCallback(() => {
    console.log('Clicked');
  },[]);

  return (
    <div>
      <Child onClick={handleClick} />  
      <button onClick={() => setCount(count + 1)}>Click: {count}</button>
    </div>
  );
}

export default Parent;