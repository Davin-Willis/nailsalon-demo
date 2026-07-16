import { Atmosphere } from "@/components/atmosphere";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HoursMap } from "@/components/hours-map";
import { Menu } from "@/components/menu";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Atmosphere />
        <CtaBand />
        <HoursMap />
      </main>
      <Footer />
    </>
  );
}
