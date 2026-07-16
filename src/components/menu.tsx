import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { services, shop } from "@/lib/content";

export function Menu() {
  return (
    <Section id="menu" eyebrow="The menu" title="Cared for, tip to cuticle.">
      <div className="mx-auto max-w-2xl">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.04}>
            <div className="border-b border-line py-8 first:border-t">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-display text-2xl tracking-tight">
                  {service.title}
                </h3>
                <span className="shrink-0 font-display text-xl text-rose italic">
                  {service.price}
                </span>
              </div>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-sm leading-relaxed text-muted">
            Appointments recommended. Call{" "}
            <a
              href={shop.phoneHref}
              className="font-medium text-rose underline decoration-rose/40 underline-offset-4 transition-colors hover:decoration-rose"
            >
              {shop.phoneDisplay}
            </a>{" "}
            and we&apos;ll hold your seat.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
