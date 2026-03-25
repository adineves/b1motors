"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "CARROS", href: "/carros" },
  { label: "MÍDIA", href: "/midia" },
  { label: "SOBRE", href: "/sobre" },
  { label: "CONTATO", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto max-w-7xl px-6 pt-6 md:px-10">
        <div className="flex justify-center">
          <Link href="/" className="text-center">
            <div className="text-4xl font-black italic tracking-tight md:text-6xl">
              <span className="text-white">B</span>
              <span className="text-red-600">1</span>
              <span className="text-white"> MOTORS</span>
            </div>
          </Link>
        </div>

        <div className="mt-4 border-t border-white/15" />

        <nav className="flex flex-wrap items-center justify-center gap-4 py-4 text-[11px] tracking-[0.28em] text-white/75 md:gap-8 md:text-xs">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}