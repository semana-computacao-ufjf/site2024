"use client";

import { useState } from "react";
import { getWeekday } from "@/util/getWeekday";
import { Event, Prize, Presenter, eventTypes } from "@prisma/client";

const formatEventType = (type: eventTypes): string => {
  switch (type) {
    case "PALESTRA":
      return "Palestra";
    case "MINICURSO":
      return "Minicurso";
    case "COMPETICAO":
      return "Competição";
    case "PROCESSO_SELETIVO":
      return "Processo Seletivo";
    case "VISITA_TECNICA":
      return "Visita Técnica";
    case "SHOW_DE_TALENTOS":
      return "Show de Talentos";
    default:
      return "Evento";
  }
};

const EventTable = ({
  events,
}: {
  events: (Event & {
    prizes: Prize[];
    presenters: Presenter[];
  })[];
}) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const eventsWithWeekday = events.map((event) => ({
    ...event,
    weekday: getWeekday(new Date(event.schedule)),
  }));

  const filteredEvents = selectedDay
    ? eventsWithWeekday.filter((event) => event.weekday === selectedDay)
    : eventsWithWeekday;

  const sortedEvents = filteredEvents.sort((a, b) => {
    return new Date(a.schedule).getTime() - new Date(b.schedule).getTime();
  });

  return (
    <div className="bg-cover bg-center bg-[#2C2B2B]">
      <h1 className="max-w-[1600px] font-gotham text-[#DCDFE5] text-7xl text-start font-bold ml-[168px] mt-28 mb-16">
        Programação
      </h1>
      <div className="text-black w-full">
        <div className="flex justify-start">
          <button
            onClick={() => setSelectedDay(null)}
            className={`text-4xl font-gotham font-bold rounded-[10px] border-2 border-[#E67119] ml-[168px] mb-16 mx-5 py-[10px] px-[20px] ${
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
              className={`text-4xl font-gotham font-bold rounded-[10px] border-2 border-[#E67119] mb-14 mx-5 py-[10px] px-[20px] ${
                selectedDay === day
                  ? "bg-[#E67119] text-white"
                  : "bg-[#121212] text-[#E67119]"
              } button-transition`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="max-w-[1600px] overflow-x-auto mx-auto">
          <table className="min-w-full border-separate border-spacing-2">
            <tbody className="text-3xl text-center font-mono text-white bg-[#121212]">
              {sortedEvents.map((event, index) => (
                <tr key={event.id}>
                  <td className="">
                    <div className="relative flex items-center justify-center h-full">
                      <div className="relative">
                        <span className="absolute w-1 h-24 bg-[#E67119] -top-12" />
                      </div>
                      <div className="flex items-center justify-center h-full pl-5 py-2">
                        <span className="inline-block w-6 h-6 bg-[#E67119] rounded-full translate-x-[-121%]" />
                        <span className="pr-6">
                          {new Intl.DateTimeFormat("pt-BR", {
                            timeStyle: "short",
                          }).format(new Date(event.schedule))}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2">
                    {formatEventType(event.eventType)}
                  </td>
                  <td className="px-3 py-2">{event.title}</td>
                  <td className="px-3 py-2">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PrizeTable = ({
  events,
}: {
  events: (Event & {
    prizes: Prize[];
    presenters: Presenter[];
  })[];
}) => {
  const eventsWithPrizes = events.filter((event) => event.prizes.length > 0);
  let mostPrizes = 0;

  for (const event of eventsWithPrizes) {
    if (event.prizes.length > mostPrizes) mostPrizes = event.prizes.length;
  }

  return (
    <>
      <h2 className="font-gotham text-[#DCDFE5] text-[24px] sm:text-[36px] font-normal text-center mt-10">
        Premiações
      </h2>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-5  mb-40">
        {eventsWithPrizes.map((event, index) => {
          return (
            <div key={index}>
              <div
                className={`grid grid-cols-4 gap-4 mb-4`}
                style={{
                  gridTemplateColumns: `repeat(${
                    mostPrizes + 1
                  }, minmax(0, 1fr))`,
                }}
              >
                <div />
                {event.prizes.map((value, index) => {
                  return (
                    <div
                      className=" text-center text-[#FF7506] p-4"
                      key={index}
                    >
                      {value.position ?? "Vencedor"}
                    </div>
                  );
                })}
              </div>

              <div
                key={index}
                className="font-inter font-bold grid grid-cols-4 gap-4 mb-4 bg-[#121212] text-[#D7D7D7] rounded-[10px] shadow-md p-4"
              >
                <div className="text-left">{event.title}</div>
                {event.prizes.map((prize, index) => (
                  <div key={index}>
                    <div className="text-center">{prize.prize}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
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
      <img src={transitionImage} alt="vectors" className="w-full" />
    </div>
  );
}
