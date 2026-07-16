import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function Atmosphere() {
  return (
    <Section
      id="about"
      eyebrow="The studio"
      title="Slow down. That's the point."
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="max-w-lg space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Lacquer &amp; Lily is a four-chair studio in the Highlands with
              tall windows, quiet music, and no one rushing you out the door.
              Your appointment is your appointment: we book with room to
              breathe, so the person in the next chair was never squeezed in
              on top of you.
            </p>
            <p>
              Everything is single-use or sterilized between guests, the
              polish wall is stocked deep, and the tea is actually good. Come
              alone with headphones or bring your best friend. Both are done
              here all the time.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <PhotoPlaceholder label="The studio, afternoon light" />
        </Reveal>
      </div>
    </Section>
  );
}
