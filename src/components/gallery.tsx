import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <Section id="gallery" eyebrow="The lookbook" title="Recent sets.">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {gallery.map((photo, i) => (
          <Reveal key={photo.label} delay={(i % 3) * 0.06}>
            <PhotoPlaceholder label={photo.label} aspect="aspect-[3/4]" />
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-12 text-sm leading-relaxed text-muted">
          Every set here was painted at this table. Bring us a reference, a
          color, or a mood, and we&apos;ll take it from there.
        </p>
      </Reveal>
    </Section>
  );
}
