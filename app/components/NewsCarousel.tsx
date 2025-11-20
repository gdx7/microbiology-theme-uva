"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { newsItems } from "@/data/news";

//export default function NewsCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (newsItems.length < 2) return;
    const id = setInterval(() => setI((x) => (x + 1) % newsItems.length), 5000);
    return () => clearInterval(id);
  }, []);

  const item = newsItems[i];
  if (!item) return null;

  return (
    <div style={{ position:"relative", border:"1px solid var(--line)", borderRadius:12, overflow:"hidden", minHeight:280 }}>
      <Image
        key={item.image}
        src={item.image}
        alt={item.alt}
        width={1600}
        height={900}
        style={{ width:"100%", height:"auto", display:"block" }}
        priority
      />
      <div style={{
        position:"absolute", left:0, right:0, bottom:0,
        background:"linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,.75) 94%)",
        color:"#fff", padding:".75rem 1rem"
      }}>
        <div style={{ display:"flex", justifyContent:"space-between", gap:12, alignItems:"baseline" }}>
          <div>
            <strong style={{ display:"block" }}>{item.title}</strong>
            {item.kicker && <small style={{ opacity:.85 }}>{item.kicker}</small>}
          </div>
          {item.href && (
            <a href={item.href} target="_blank" rel="noreferrer" style={{ color:"#fff", textDecoration:"underline" }}>
              Read more →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
