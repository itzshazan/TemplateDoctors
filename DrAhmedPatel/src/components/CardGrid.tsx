import type { CSSProperties } from "react";
import { type Treatment } from "@/config/site";

interface CardGridProps {
  items: Treatment[];
  limit?: number;
}

export default function CardGrid({ items, limit }: CardGridProps) {
  return (
    <div className="card-grid">
      {items.slice(0, limit).map((t, i) => (
        <div
          key={t.id}
          className={`card reveal${i === 0 ? " is-featured" : ""}`}
          style={{ "--card-icon": `url('/img/${t.icon}.svg')` } as CSSProperties}
        >
          <img className="icon" src={`/img/${t.icon}.svg`} alt="" width={64} height={64} />
          <h3>{t.title}</h3>
          <p>{t.desc}</p>
        </div>
      ))}
    </div>
  );
}
