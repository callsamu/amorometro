import { useEffect, useRef, useState } from "react";

type Props = {
  ceiling: number;
  duration: number;
};

function easeInOut(x: number): number {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

export default function Counter({ ceiling, duration }: Props) {
  const [counter, setCounter] = useState(0);

  const startTimeRef = useRef(0);

  const step = (current: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = current;
    }

    const progress = Math.min((current - startTimeRef.current) / duration, 1);
    setCounter(easeInOut(progress) * ceiling);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      cancelAnimationFrame(requestAnimationFrame(step));
    }
  };

  useEffect(() => {
    requestAnimationFrame(step);
  })

  return <span>{counter.toFixed(0)}</span>;
}
