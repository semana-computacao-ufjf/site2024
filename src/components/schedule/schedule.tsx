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
    <div className="w-full bg-cover bg-center bg-[#2C2B2B]">
      <h1 className="font-gotham text-white text-3xl sm:text-7xl text-start font-bold sm:ml-[168px] ml-8 sm:mt-28 mt-12 sm:mb-16 mb-11">
        Programação
      </h1>
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
      <h2 className="font-gotham text-white text-[24px] sm:text-[36px] font-normal text-center mt-10">
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
      {/* <img
        src={transitionImage}
        alt="vectors"
        className="w-full overflow-hidden"
      /> */}
      <div className="h-72 w-full bg-cover bg-no-repeat bg-[url('/images/transition.png')]" />
    </div>
  );
}
