import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { hours, shop } from "@/lib/content";

export function HoursMap() {
  return (
    <Section id="hours" eyebrow="Hours & Location" title="Find your way to us.">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <dl className="text-sm">
            {hours.map((row) => (
              <div
                key={row.day}
                className="flex items-baseline justify-between gap-4 border-b border-line py-4"
              >
                <dt className="font-medium tracking-[0.2em] text-muted uppercase">
                  {row.day}
                </dt>
                <dd
                  className={
                    row.time === "Closed"
                      ? "text-muted/60"
                      : "font-medium text-cocoa"
                  }
                >
                  {row.time}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <p className="text-xs font-medium tracking-[0.25em] text-muted uppercase">
              Find us
            </p>
            <p className="mt-3 text-lg">{shop.address}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={shop.phoneHref}
                className="border border-rose px-6 py-3 text-sm font-medium tracking-[0.2em] text-rose uppercase transition-colors duration-300 hover:bg-rose hover:text-cream"
              >
                Call {shop.phoneDisplay}
              </a>
              <a
                href={shop.mapLink}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-3 text-sm font-medium text-muted transition-colors hover:text-cocoa"
              >
                Get directions ↗
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full min-h-[20rem] border border-line">
            <iframe
              src={shop.mapEmbed}
              title="Map showing the Louisville, KY area (demo placeholder)"
              className="map-soft h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
