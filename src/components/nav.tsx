import { shop } from "@/lib/content";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#hours" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-blush/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg tracking-tight">
          Lacquer <span className="text-rose italic">&amp;</span> Lily
        </a>
        <div className="hidden items-center gap-10 text-xs font-medium tracking-[0.25em] uppercase md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-cocoa"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={shop.phoneHref}
          className="border border-rose px-4 py-2 text-xs font-medium tracking-[0.2em] text-rose uppercase transition-colors duration-300 hover:bg-rose hover:text-cream"
        >
          {shop.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
