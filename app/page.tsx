import About from "./sections/About";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Portfolio />
    </div>
  );
}
