import About from "./sections/About";
import Clients from "./sections/Clients";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import { Prices } from "./sections/Prices";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Portfolio />
      <Testimonial />
      <Prices />
    </div>
  );
}
