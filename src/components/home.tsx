"use client";

import { useRef } from "react";
import NavBar from "@/components/navbar footer/navBar";
import Cover from "@/components/cover/cover";
import Presentation from "./presentation/page";
import SponsorsSection from "@/components/sponsors/sponsors-section";
import StudentOrganizationSection from "./studentOrganization/studentOrganizationSection";
import Schedule from "./schedule/schedule";
import SpeakerTable from "@/components/SpeakerTable";
import CodeSection from "@/components/code-tech/CodeSection";
import CardTechnology from "@/components/code-tech/CardTechnology";
import ContactSection from "@/components/contact/contact-section";
import FAQSection from "@/components/faq/faq-section";
import Footer from "@/components/navbar footer/Footer";
import {
  Event,
  Faq,
  Presenter,
  Prize,
  Sponsor,
  StudentOrganization,
} from "@prisma/client";

const Home = ({
  sponsors,
  studentOrganizations,
  events,
  presenters,
  faqs,
}: {
  sponsors: Sponsor[];
  studentOrganizations: StudentOrganization[];
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
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  // const studentOrganizationsRef = useRef<HTMLDivElement>(null);
  // const presentationRef = useRef<HTMLDivElement>(null);

  const sections = [
    { name: "Início", ref: coverRef },
    { name: "Programação", ref: scheduleRef },
    { name: "Palestrantes", ref: speakersRef },
    { name: "Patrocinadores", ref: sponsorsRef },
    { name: "FAQ", ref: faqRef },
    { name: "Contato", ref: contactRef },
    // { name: "Patrocinadores", ref: studentOrganizationsRef },
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
        <div
          className="max-w-[1600px] mx-auto scroll-mt-[6.5em] lg:scroll-mt-[8em]"
          ref={coverRef}
        >
          <Cover />
        </div>
        <div className="scroll-mt-[6.5em] lg:scroll-mt-[8em]" ref={scheduleRef}>
          <Schedule events={events} />
        </div>
        <div className="scroll-mt-[6.5em] lg:scroll-mt-[8em]" ref={speakersRef}>
          <SpeakerTable presenters={presenters} />
        </div>
        <div className="scroll-mt-[6.5em] lg:scroll-mt-[8em]" ref={sponsorsRef}>
          <SponsorsSection sponsors={sponsors} />
        </div>
        <div className="scroll-mt-[6.5em] lg:scroll-mt-[8em]">
          <StudentOrganizationSection
            studentOrganizations={studentOrganizations}
          />
        </div>
        <div className="scroll-mt-[6.5em] lg:scroll-mt-[8em]" ref={faqRef}>
          <FAQSection faqs={faqs} />
        </div>
      </main>

      <div ref={contactRef} />
      <Footer />
    </div>
  );
};

export { Home };
