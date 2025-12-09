import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans antialiased text-slate-100 overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
