"use client";

import { useRef } from "react";
import NavBar from "@/components/navbar footer/navBar";
import Cover from "@/components/cover/cover";
import Presentation from "./presentation/page";
import SponsorsSection from "@/components/sponsors/sponsors-section";
import Schedule from "./schedule/schedule";
import SpeakerTable from "@/components/SpeakerTable";
import CodeSection from "@/components/code-tech/CodeSection";
import CardTechnology from "@/components/code-tech/CardTechnology";
import ContactSection from "@/components/contact/contact-section";
import FAQSection from "@/components/faq/faq-section";
import Footer from "@/components/navbar footer/Footer";
import { Event, Faq, Presenter, Prize, Sponsor } from "@prisma/client";

const Home = ({
  sponsors,
  events,
  presenters,
  faqs,
}: {
  sponsors: Sponsor[];
  events: (Event & {
    prizes: Prize[];
    presenters: Presenter[];
  })[];
  presenters: (Presenter & {
    events: Event[];
  })[];
  faqs: Faq[];
}) => {
  const coverRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const sections = [
    { name: "Início", ref: coverRef },
    { name: "Programação", ref: scheduleRef },
    { name: "Palestrantes", ref: speakersRef },
    { name: "Patrocinadores", ref: sponsorsRef },
    { name: "Contato", ref: contactRef },
    { name: "FAQ", ref: faqRef },
    // { name: "Apresentação", ref: presentationRef },
  ];

  const presentationImages = [
    "/images/exampleImages/20231025_140937-1-1024x768.jpg",
    "/images/exampleImages/a68cc476-12f6-4b16-9047-762f860abec1.jpeg",
    "/images/exampleImages/Porte-dinmica-4.jpg",
    "/images/exampleImages/Figura-5-Noite-de-jogos-na-Semana-da-ComputacComputacComputacao-da-UFJF-em-2017.png",
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <NavBar sections={sections} />
      <main className="w-full min-h-screen flex flex-col items-stretch justify-between">
        <div className="max-w-[1600px] mx-auto" ref={coverRef}>
          <Cover />
        </div>
        <div ref={scheduleRef}>
          <Schedule events={events} />
        </div>
        <div ref={speakersRef}>
          <SpeakerTable presenters={presenters} />
        </div>
        <div ref={sponsorsRef}>
          <SponsorsSection sponsors={sponsors} />
        </div>
        <div ref={faqRef}>{/* <FAQSection faqs={faqs} /> */}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export { Home };
