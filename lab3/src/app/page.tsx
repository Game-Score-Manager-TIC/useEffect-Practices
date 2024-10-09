"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Time passed: {time} seconds</h1>
      <p>This page will automatically update every second.</p>
    </div>
  );
}
