import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function parseNumber(str) {
  if (typeof str === "number") return { num: str, prefix: "", suffix: "" };
  const match = String(str).match(/^([^\d]*)([\d,]+\.?\d*)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: str };
  const [, prefix, numStr, suffix] = match;
  return { num: parseFloat(numStr.replace(/,/g, "")), prefix, suffix };
}

export default function CountUp({ value, duration = 1.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(null);

  const { num, prefix, suffix } = parseNumber(value);

  useEffect(() => {
    if (!inView) return;
    let start;
    const isInt = Number.isInteger(num);

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const current = num * progress;
      setDisplay(isInt ? Math.round(current).toLocaleString() : current.toFixed(1));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display === null ? "0" : display}
      {suffix}
    </span>
  );
}