import Home from "../components/home";
import { Sponsor } from "@/types/sponsor";
import { Event, Prize } from "@/types/event";
import { Presenter } from "@/types/presenter";
import { Faq } from "@/types/faq";
import { getAllSponsors } from "./api/fetch/sponsor.fetch";
import { getAllEvents } from "./api/fetch/event.fetch";
import { getAllPresenters } from "./api/fetch/presenter.fetch";
import { getAllFaqs } from "./api/faq/faq.question";

//TODO: as imagens devem estar no banco
const presentationImages = [
  "/images/exampleImages/20231025_140937-1-1024x768.jpg",
  "/images/exampleImages/a68cc476-12f6-4b16-9047-762f860abec1.jpeg",
  "/images/exampleImages/Porte-dinmica-4.jpg",
  "/images/exampleImages/Figura-5-Noite-de-jogos-na-Semana-da-ComputacComputacComputacao-da-UFJF-em-2017.png",
];
async function getSponsors(): Promise<Sponsor[]> {
  try {
    const sponsors = await getAllSponsors();
    if (!sponsors) {
      throw new Error("No sponsors found");
    }
    return sponsors;
  } catch (error) {
    console.error(error);
    return [];
  }
}
async function getEvents(): Promise<Event[]> {
  try {
    const events = await getAllEvents();
    if (!events) {
      throw new Error("No events found");
    }
    return events;
  } catch (error) {
    console.error(error);
    return [];
  }
}
//TODO: os eventos devem conter campos para a premiação
const prizes: Prize[] = [
  {
    title: "Maratona de Programação",
    firstPlace: "R$ 1000",
    secondPlace: "R$ 500",
    thirdPlace: "R$ 250",
  },
  {
    title: "Game Jam",
    firstPlace: "R$ 1500",
    secondPlace: "R$ 700",
    thirdPlace: "R$ 300",
  },
  {
    title: "Competição de CSS",
    firstPlace: "R$ 2000",
    secondPlace: "R$ 1000",
    thirdPlace: "R$ 500",
  },
];
async function getPresenters(): Promise<Presenter[]> {
  try {
    const presenters = await getAllPresenters();
    if (!presenters) {
      throw new Error("No presenters found");
    }
    return presenters;
  } catch (error) {
    console.error(error);
    return [];
  }
}
//TODO: as perguntas devem estar no banco
const faqs: Faq[] = getAllFaqs();

export default async function App() {
  const sponsors: Sponsor[] = await getSponsors();
  const events: Event[] = await getEvents();
  const presenters: Presenter[] = await getPresenters();
  return (
    <Home
      presentationImages={presentationImages}
      sponsors={sponsors}
      events={events}
      prizes={prizes}
      presenters={presenters}
      faqs={faqs}
    />
  );
}
