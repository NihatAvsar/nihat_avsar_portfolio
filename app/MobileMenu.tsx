"use client";

import { useState } from "react";

const links = [
  ["Hakkımda", "#hakkimda"],
  ["Projeler", "#projeler"],
  ["Deneyim", "#deneyim"],
  ["Yetenekler", "#yetenekler"],
  ["İletişim", "#iletisim"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`}>
      <button
        type="button"
        aria-label={open ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav id="mobile-navigation" aria-label="Mobil menü">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </div>
  );
}
