"use client";
import { useEffect, useState } from "react";
import { setItem } from "./utils/localStorage";

export default function Home() {
  const [count, setCount] = useState(() => {
    const item =
      typeof window !== "undefined"
        ? window.localStorage.getItem("count")
        : null;
    return (item as number) || 0;
  });

  useEffect(() => {
    setItem("count", String(count));
  }, [count]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
