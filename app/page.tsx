import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import { Ecosystem } from "@/components/ecosystem";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ecosystem />
      <Services />
      <Footer />
    </main>
  );
}
