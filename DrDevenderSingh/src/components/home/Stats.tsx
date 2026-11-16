"use client";

import React, { useEffect, useState } from "react";
import { stats } from "../../data/site";
import useInView from "../../hooks/useInView";

function Counter({ value, start }: { value: number; start: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 3000;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return <>{n.toLocaleString("en-IN")}</>;
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="funfact">
      <div className="container">
        <div className="funfact__grid" ref={ref}>
          {stats.map((s) => (
            <div className="funfact__item" key={s.label}>
              <img src={s.icon} alt="" />
              <div>
                <p className="funfact__count">
                  <Counter value={s.value} start={inView} />
                  <span>+</span>
                </p>
                <h3>{s.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
