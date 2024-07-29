import FAQSession from "@/components/faq/faq-session";
import SponsorsSession from "@/components/sponsors/sponsors-session";
import ContactSession from "@/components/contact/contact-session";
import Footer from "@/components/navbar footer/Footer";
import NavBar from "@/components/navbar footer/navBar";
import SpeakerTable from "@/components/SpeakerTable";
import Title from "@/components/Title";
import ScheduleClient from "./schedule/scheduleClient";
import Presentation from "./presentation/page";
import CodeSection from "@/components/code-tech/CodeSection";
import CardTechnology from "@/components/code-tech/CardTechnology";
import RedirectButton from "@/components/RedirectButton";
import Cover from "@/components/cover/cover";
import { Event } from '@/types/event';
import { Presenter } from "@/types/presenter";

async function fetchData() {
  try {
    const eventsResponse = await fetch('/api/events');
    if (!eventsResponse.ok) throw new Error('Failed to fetch events');
    const events: Event[] = await eventsResponse.json();

    const presentersResponse = await fetch('/api/presenters');
    if (!presentersResponse.ok) throw new Error('Failed to fetch presenters');
    const presenters: Presenter[] = await presentersResponse.json();

    return { events, presenters };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { events: [], presenters: [] }; // Valores padrão em caso de erro
  }
}

export default async function Home() {
  const { events, presenters } = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Cover />
      <Presentation />
      <ScheduleClient events={events}/>
      <Title Title="Patrocinadores" />
      <SponsorsSession />
      <Title Title="Conheça nossos palestrantes" />
      <SpeakerTable speakerData={presenters} />
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
        <div className="mb-12">
        <RedirectButton redirectTo={"/contato"} text="Entre em Contato" ></RedirectButton>

        </div>
      </div>
        <ContactSession />
        <FAQSession />
        <Footer />
    </main>
  );
}
