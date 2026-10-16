import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Story from "./components/Story";
import Signature from "./components/Signature";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Shared so that choosing a service card pre-selects it in the contact form.
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services onSelect={setSelectedService} />
        <Story />
        <Signature />
        <ServiceArea />
        <Contact service={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer />
    </>
  );
}
