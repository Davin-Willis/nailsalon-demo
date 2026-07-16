import { shop } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-cocoa text-blush">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-tight">
            Lacquer <span className="italic">&amp;</span> Lily
          </p>
          <p className="mt-3 text-xs leading-relaxed text-blush/60">
            {shop.address}
            <br />
            <a href={shop.phoneHref} className="hover:text-blush">
              {shop.phoneDisplay}
            </a>
          </p>
        </div>
        <p className="text-xs leading-relaxed text-blush/60">
          Demo site by{" "}
          <a
            href={shop.builderUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blush/80 underline underline-offset-4 transition-colors hover:text-blush"
          >
            {shop.builderName}
          </a>
          . Fictional business, all details are placeholders.
        </p>
      </div>
    </footer>
  );
}
