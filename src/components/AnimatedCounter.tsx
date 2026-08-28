"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter: React.FC<{ value: string; suffix?: string }> = ({
  value,
  suffix,
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const num = parseInt(value);
  const isNumeric = !isNaN(num);

  return (
    <span ref={ref} className="block text-2xl md:text-4xl font-bold text-gold-400 font-serif">
      {isNumeric ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            {inView ? (
              <CountingNumber target={num} />
            ) : (
              "0"
            )}
          </motion.span>
        </motion.span>
      ) : (
        value
      )}
      {suffix && <span className="text-gold-400/60">{suffix}</span>}
    </span>
  );
};

const CountingNumber: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedCounter;
