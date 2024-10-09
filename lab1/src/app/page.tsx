"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleOnClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleOnClick}>Incrementar cuenta</button>
    </div>
  );
}
