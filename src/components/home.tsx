"use client";

import { useRef } from "react";
import NavBar from "@/components/navbar footer/navBar";
import Cover from "@/components/cover/cover";
import SponsorsSection from "@/components/sponsors/sponsors-section";
import StudentOrganizationSection from "./studentOrganization/studentOrganizationSection";
import Schedule from "./schedule/schedule";
import SpeakerTable from "@/components/SpeakerTable";
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

  const sections = [
    { name: "Início", ref: coverRef },
    { name: "Patrocinadores", ref: sponsorsRef },
    { name: "Programação", ref: scheduleRef },
    { name: "Palestrantes", ref: speakersRef },
    { name: "FAQ", ref: faqRef },
    { name: "Contato", ref: contactRef },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <NavBar sections={sections} />
      <main className="w-full min-h-screen flex flex-col items-stretch justify-between">
        <div
          className="max-w-[1600px] mx-auto scroll-mt-[6.5em]"
          ref={coverRef}
        >
          <Cover />
        </div>
        <div className="scroll-mt-[6.5em]" ref={sponsorsRef}>
          <SponsorsSection sponsors={sponsors} />
        </div>
        <div className="scroll-mt-[6.5em]" ref={scheduleRef}>
          <Schedule events={events} />
        </div>
        <div className="scroll-mt-[6.5em]" ref={speakersRef}>
          <SpeakerTable presenters={presenters} />
        </div>
        <div className="scroll-mt-[6.5em]">
          <StudentOrganizationSection
            studentOrganizations={studentOrganizations}
          />
        </div>
        <div className="scroll-mt-[6.5em]" ref={faqRef}>
          <FAQSection faqs={faqs} />
        </div>
      </main>

      <div ref={contactRef} />
      <Footer />
    </div>
  );
};

export { Home };
