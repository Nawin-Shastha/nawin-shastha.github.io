import Navbar     from "@/components/shared/Navbar";
import Footer     from "@/components/shared/Footer";
import CursorGlow from "@/components/shared/CursorGlow";
import Hero       from "@/components/sections/Hero";
import Services   from "@/components/sections/Services";
import Contact    from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
