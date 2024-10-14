import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState<number>(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!start.current) start.current = timestamp;
      const progress = timestamp - start.current;
      const value = Math.min(Math.floor((progress / duration) * end), end);
      setCount(value);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
    // Reset the start time when the end value changes
    return () => {
      start.current = null;
    };
  }, [end, duration]);

  return (
    <span>
      {count}
      <span className="text-primary">+</span>
    </span>
  );
};

export default Counter;
