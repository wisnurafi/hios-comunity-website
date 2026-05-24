import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { MembersSection } from "@/components/sections/members-section";
import { DiscordSection } from "@/components/sections/discord-section";
import { GamesSection } from "@/components/sections/games-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { StorySection } from "@/components/sections/story-section";
import { QuotesSection } from "@/components/sections/quotes-section";
import { ComicLoader } from "@/components/ui/comic-loader";

export default function Home() {
  return (
    <>
      <ComicLoader />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <MembersSection />
        <DiscordSection />
        <GamesSection />
        <GallerySection />
        <StorySection />
        <QuotesSection />
      </main>
      <Footer />
    </>
  );
}
