import { Reveal } from "@/components/reveal";
import { shop } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Your seat is <em className="text-rose italic">waiting.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-balance text-muted">
            Call to book, or take your chances as a walk-in. We&apos;ll put
            the kettle on either way.
          </p>
          <a
            href={shop.phoneHref}
            className="mt-10 inline-block bg-rose px-8 py-4 text-sm font-medium tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-cocoa"
          >
            Call {shop.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
