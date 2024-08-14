"use client";

import { useRef } from "react";
import FAQSession from "@/components/faq/faq-session";
import SponsorsSession from "@/components/sponsors/sponsors-session";
import ContactSession from "@/components/contact/contact-session";
import Footer from "@/components/navbar footer/Footer";
import NavBar from "@/components/navbar footer/navBar";
import SpeakerTable from "../components/SpeakerTable";
import Title from "@/components/Title";
import CodeSection from "@/components/code-tech/CodeSection";
import CardTechnology from "@/components/code-tech/CardTechnology";
import ScheduleClient from "./schedule/scheduleClient";

import { Event } from "@/types/event";
import Presentation from "./presentation/page";
import { SpeakerData } from "@/types/speaker";
import Cover from "@/components/cover/cover";
import { Faq } from "@/types/faq";

interface HomeProps {
  events: Event[];
  speakers: SpeakerData[];
  faqs: Faq[];
}

export default function Home({ events, speakers, faqs }: HomeProps) {
  const coverRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const sections = [
    { name: "Início", ref: coverRef },
    { name: "Apresentação", ref: presentationRef },
    { name: "Patrocinadores", ref: sponsorsRef },
    { name: "Programação", ref: scheduleRef },
    { name: "Palestrantes", ref: speakersRef },
    { name: "Contato", ref: contactRef },
    { name: "FAQ", ref: faqRef },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#181426]">
      <NavBar sections={sections} />
      <div ref={coverRef}>
        <Cover />
      </div>
      <div ref={presentationRef}>
        <Presentation />
      </div>
      <div ref={sponsorsRef}>{/* <SponsorsSession /> */}</div>
      <div ref={scheduleRef}>
        <ScheduleClient events={events} />
      </div>
      <div ref={speakersRef}>
        <Title Title="Conheça nossos palestrantes" />
        {/* TODO: ao descomentar este componente tudo que depende de states para de funcionar no site */}
        {/* <SpeakerTable speakerData={speakers} /> */}
      </div>
      <div className="bg-white mb-20">
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
        <ContactSession />
      </div>
      <div ref={faqRef}>
        <FAQSession faqs={faqs} />
      </div>
      <Footer />
    </main>
  );
}
