
import { getAllPresenters } from "./api/fetch/presenter.fetch"; 
import { getAllEvents } from "./api/fetch/event.fetch";
import { getAllSponsors } from "./api/fetch/sponsor.fetch";
import SpeakerTable from "@/components/SpeakerTable";
import { Presenter } from "@/types/presenter";
import { Sponsor } from "@/types/sponsor";
import { Event } from "@/types/event";
import FAQSession from "@/components/faq/faq-session";
import SponsorsSession from "@/components/sponsors/sponsors-session";
import ContactSession from "@/components/contact/contact-session";
import Footer from "@/components/navbar footer/Footer";
import NavBar from "@/components/navbar footer/navBar";
import CodeSection from "@/components/code-tech/CodeSection";
import CardTechnology from "@/components/code-tech/CardTechnology";
import ScheduleClient from "./schedule/scheduleClient";
import { fakeEventApi } from "@/util/fakeApi";
import Presentation from "./presentation/page";
import RedirectButton from "@/components/RedirectButton";

export default async function Home() {
  const speakers: Presenter[] = await getAllPresenters();
  // const events: Event[] = await getAllEvents();
  const sponsors: Sponsor[] = await getAllSponsors();


  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <div className="shadow-[-20px_-20px_50px_-20px_rgba(0,0,0,0.5)] w-full h-[0.5px] opacity-80"></div>
      <Cover />
      <Presentation />
      {/* <ScheduleClient events={events} /> */}
      <div className="w-full bg-white text-black flex flex-col text-center py-10">
        <h1 className="text-5xl"> Patrocinadores</h1>
        <SponsorsSession />
      </div>
      <div className="mt-10 w-screen gap-y-11">
        <h1 className="xl:text-5xl lg:4xl md:text-3xl text-2xl text-center mb-11">
          Conheça nossos palestrantes!
        </h1>
        <SpeakerTable speakerData={speakers} />
      </div>
      <div className="bg-white">
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
          <RedirectButton
            redirectTo={"/contato"}
            text="Entre em Contato"
          />
        </div>
      </div>
      <ContactSession />
      <FAQSession />
      <Footer />
    </main>
  );
}

const Cover = () => {
  const backgroundImage = "/images/fundoPostEscuro2.png";
  return (
    <div
      className="flex items-center justify-around p-4 bg-cover bg-center min-h-screen w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center">
        <h1 className="font-viga text-[10vw] sm:text-[8vw] md:text-[10vw] lg:text-[10vw] font-bold leading-[1.1] text-left">
          XXVI
        </h1>
        <h1 className="font-julius-sans-one text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[8vw] font-normal leading-[1.1] text-left mt-[-0.5rem]">
          <div>Semana da</div>
          <div>Computação</div>
        </h1>

        <h2 className="font-viga text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] font-normal leading-tight text-left mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          Dias 25 a 29 de Novembro, 2024
        </h2>
        <div className="flex items-start justify-start flex-wrap mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:text-xl">
          <button className="bg-white text-black font-semibold py-2 px-4 lg:py-4 lg:px-8 rounded-lg border-2 border-white shadow-md hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 btn-custom">
            Saiba mais
          </button>
          <button className="bg-transparent text-white font-semibold py-2 px-4 lg:py-4 lg:px-8 rounded-lg border-2 border-white shadow-md hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 ml-4 lg:ml-8 btn-custom">
            Dúvidas?
          </button>
        </div>
      </div>
      <img
        src="/images/homeImage.png"
        alt="HomeImage"
        className="max-w-[35%] sm:max-w-[40%] md:max-w-[60%] lg:max-w-[100%] mt-0 mb-40 lg:ml-20 md:ml-10"
      />
    </div>
  );
};
