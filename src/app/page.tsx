import { fakeEventApi, fakeSpeakerApi } from "@/util/fakeApi";
import { SpeakerData } from "@/types/speaker";
import Home from "./home";
import { Event } from "@/types/event";
import { getAllFaqs } from "./api/faq/faq.question";
import { Faq } from "@/types/faq";

const events: Event[] = fakeEventApi();

const speakers: SpeakerData[] = fakeSpeakerApi();

const faqs: Faq[] = getAllFaqs();
export default function App() {
  return <Home events={events} speakers={speakers} faqs={faqs} />;
}
