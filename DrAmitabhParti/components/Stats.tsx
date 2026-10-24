"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function Counter({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    const duration = 1600;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  return (
    <>
      {n.toLocaleString("en-IN")}
      {suffix}
    </>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref}>
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <strong>
            <Counter value={s.value} suffix={s.suffix} run={visible} />
          </strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
