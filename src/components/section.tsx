import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.3em] text-rose uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}
