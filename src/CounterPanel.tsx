import { useState } from "react";

export default function CounterPanel() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Counter Panel</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}