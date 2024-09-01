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
      <main className="flex min-h-screen flex-col items-stretch justify-between max-w-[1600px]">
        <div ref={coverRef}>
          <Cover />
        </div>
        {/* <div ref={presentationRef}>
          <Presentation presentationImages={presentationImages} />
        </div> */}
        <div ref={sponsorsRef}>
          <SponsorsSection sponsors={sponsors} />
        </div>
        <div className="relative" ref={scheduleRef}>
          <div className="absolute w-[200vw] h-full -z-[1] bg-[#202020] ml-[-100vw]" />
          <Schedule events={events} />
        </div>
        <div className="relative" ref={speakersRef}>
          <div className="absolute w-[200vw] h-full -z-[1] bg-[#202020] ml-[-100vw]" />
          <SpeakerTable presenters={presenters} />
        </div>
        <div className="mb-20">
          <CodeSection />
          <div className="flex flex-col sectionBreak:flex-row justify-around px-6 gap-0 sectionBreak:gap-8 items-center sectionBreak:items-stretch">
            <CardTechnology
              image="/images/app-icon.png"
              title="Aplicativos"
              description="Não quer ficar para trás no mundo dos aplicativos? Com o React Native a Code pode ajudar você e a sua empresa!"
            />
            <CardTechnology
              image="/images/web-icon.png"
              title="Sites expositivos"
              description="Deseja divulgar sua marca e ter mais clientes? Nós desenvolvemos um site expositivo profissional para ajudar o seu negócio a alcançar esses objetivos."
            />
            <CardTechnology
              image="/images/laravel-icon.png"
              title="Sistemas"
              description="Deseja modernizar e trazer tecnologia para seu negócio? Com o Laravel, podemos trazer o sistema de gerenciamento mais moderno do mercado!"
            />
          </div>
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
        <div ref={faqRef}>
          <FAQSection faqs={faqs} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { Home };
