"use client";

import { useState } from "react";
import { getWeekday } from "@/util/getWeekday";
import { Event, Prize, Presenter, eventTypes } from "@prisma/client";
import formatEventType from "@/util/formatEventType";
import EventsModal from "../eventsModal";
import Workshop from "../workshop";

const EventTable = ({
  events,
}: {
  events: (Event & {
    prizes: Prize[];
    presenters: Presenter[];
  })[];
}) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    if (event.schedule) {
      setSelectedEvent(event);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const eventsWithWeekday = events.map((event) => ({
    ...event,
    weekday: event.schedule
      ? getWeekday(new Date(event.schedule))
      : "Data não disponível",
  }));

  const filteredEvents = selectedDay
    ? eventsWithWeekday.filter((event) => event.weekday === selectedDay)
    : eventsWithWeekday;

  const sortedEvents = filteredEvents.sort((a, b) => {
    return (
      new Date(a.schedule ?? 0).getTime() - new Date(b.schedule ?? 0).getTime()
    );
  });

  return (
    <div className="w-full bg-cover bg-center bg-[#2C2B2B]">
      <div className="relative flex items-center ml-8 sm:ml-[168px] mb-12 sm:mb-20 pt-10 sm:pt-28">
        <h1 className="font-gotham text-white text-3xl sm:text-7xl font-bold">
          Programação
        </h1>
        <div className="flex-grow h-[2px] bg-[#E67119] ml-4" />
        <div className="w-6 h-6 bg-[#E67119] rounded-full mr-5 sm:mr-36"></div>
      </div>
      <div className="text-black w-full flex flex-wrap">
        <div className="flex flex-wrap sm:flex-row sm:justify-start ml-6 sm:ml-0">
          <button
            onClick={() => setSelectedDay(null)}
            className={`text-xl sm:text-4xl font-gotham font-bold rounded-[10px] border-2 border-[#E67119] sm:ml-[168px] mb-5 sm:mb-16 mr-4 sm:mx-5 py-[5px] sm:py-[10px] px-[20px] ${
              selectedDay === null
                ? "bg-[#E67119] text-white"
                : "bg-[#121212] text-[#E67119]"
            } button-transition`}
          >
            Todos
          </button>
          {["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`text-xl sm:text-4xl font-gotham font-bold rounded-[10px] border-2 border-[#E67119] mb-5 sm:mb-16 mr-4 sm:mx-5 py-[5px] sm:py-[10px] px-[20px] ${
                selectedDay === day
                  ? "bg-[#E67119] text-white"
                  : "bg-[#121212] text-[#E67119]"
              } button-transition`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="max-w-[1600px] overflow-x-auto overflow-y-hidden mx-auto mt-8 sm:mt-0 pb-7 sm:pb-24">
          <table className="min-w-full border-separate border-spacing-2">
            <tbody className="text-xl sm:text-3xl text-center font-mono text-white bg-[#121212]">
              {sortedEvents.map((event, index) => (
                <tr key={event.id}>
                  <td className="relative">
                    <div className="flex items-center justify-start h-full">
                      <span className="absolute w-1 bg-[#E67119] h-[120%] left-0" />
                      <span className="inline-block w-6 h-6 bg-[#E67119] rounded-full left-0 -translate-x-[9px]" />
                      <div className="flex items-center justify-center pl-5 py-2 ml-1">
                        <span className="pr-6">
                          {new Intl.DateTimeFormat("pt-BR", {
                            timeStyle: "short",
                            timeZone: "America/Sao_Paulo",
                          }).format(new Date(event.schedule ?? 0))}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2">
                    {formatEventType(event.eventType)}
                  </td>
                  <td className="px-3 py-2">
                    <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                      <span>{event.title}</span>
                      <button
                        onClick={() => handleEventClick(event)}
                        className="bg-[#E67119] text-white rounded-full h-10 w-10 flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={"/icons/info.png"}
                          className="h-10 w-10 object-contain invert"
                          alt="info"
                        />
                      </button>
                    </div>
                  </td>
                  <td className="px-3 py-2">{event.location || "Em breve"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <EventsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        events={selectedEvent ? [selectedEvent] : null}
      />
    </div>
  );
};

export default function Schedule({
  events,
}: {
  events: (Event & {
    prizes: Prize[];
    presenters: Presenter[];
  })[];
}) {
  const transitionImage = "/images/transition.png";

  return (
    <div className="min-h-screen w-full flex flex-col">
      <EventTable events={events} />
      <Workshop />
      <div className="h-72 w-full bg-cover bg-no-repeat bg-[url('/images/transition.png')]" />
    </div>
  );
}
