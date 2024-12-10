import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Process from "./components/home/Process";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <Process />
      </main>
    </div>
  );
}
