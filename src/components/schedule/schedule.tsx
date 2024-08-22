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

export default function Schedule({
  events,
  prizes,
}: {
  events: (Event & {
    prizes: Prize[];
    presenters: Presenter[];
  })[];
  prizes: (Prize & {
    event: Event | null;
  })[];
}) {
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

  const EventTable = () => {
    return (
      <>
        <h1 className="font-gotham text-[#DCDFE5] text-[36px] sm:text-[48px] text-center mt-10">
          Programação
        </h1>
        <div className="text-black w-full">
          <div className="mt-5 mb-10 flex justify-center gap-2">
            {["SEG", "TER", "QUA", "QUI", "SEX"].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`w-1/5 sm:w-1/12 m-2 p-2 rounded-[30px] ${
                  selectedDay === day ? "bg-[#FF7506]" : "bg-[#DCDFE5] "
                } button-transition font-gotham font-bold`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="px-4 sm:px-6 lg:px-20">
            <div className="overflow-x-auto rounded-[30px] w-[80%] mx-auto">
              <table className="font-inter min-w-full divide-y divide-[#DCDFE5] w-full h-[224px] gap-[10px]">
                <tbody className="bg-[#D7D7D7] divide-y divide-[#DCDFE5]">
                  {sortedEvents.map((event, index) => (
                    <tr
                      key={event.id}
                      className={`${
                        index % 2 === 0
                          ? "bg-[#121212] text-[#D7D7D7]"
                          : "bg-[#D7D7D7] text-black"
                      }`}
                    >
                      <td className="px-2 py-4 [#D7D7D7]space-nowrap text-center relative">
                        <div className="text-sm flex flex-col items-center pl-4">
                          <img
                            src={`/icons/${event.eventType}.png`}
                            alt={formatEventType(event.eventType)}
                            className={`h-8 w-8 ${
                              index % 2 !== 0 ? "invert" : ""
                            }`}
                          />
                          <span className="mt-2 ">
                            {formatEventType(event.eventType)}
                          </span>
                        </div>
                        <span className="separator"></span>
                      </td>
                      <td className="px-2 py-4 [#D7D7D7]space-nowrap text-left relative">
                        <div className="text-sm pl-4">{event.title}</div>
                        {event.description && (
                          <div className="text-sm mt-1">
                            {event.description ?? ""}
                          </div>
                        )}
                        <span className="separator"></span>
                      </td>
                      <td className="px-2 py-4 [#D7D7D7]space-nowrap text-center relative">
                        <div className="text-sm font-bold pl-4">
                          {new Intl.DateTimeFormat("pt-BR", {
                            timeStyle: "short",
                          }).format(new Date(event.schedule))}
                        </div>
                        <span className="separator"></span>
                      </td>
                      <td className="px-2 py-4 [#D7D7D7]space-nowrap text-center">
                        <div className="text-sm font-bold pl-4">
                          {event.location}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };

  const PrizeTable = () => {
    return (
      <>
        <h2 className="font-gotham text-[#DCDFE5] text-[24px] sm:text-[36px] font-normal text-center mt-10">
          Premiações
        </h2>
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-5  mb-40">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div></div>
            <div className=" text-center text-[#FF7506] p-4">1º lugar</div>
            <div className=" text-center text-[#FF7506] p-4">2º lugar</div>
            <div className=" text-center text-[#FF7506] p-4">3º lugar</div>
          </div>

          {prizes.map((prize, index) => (
            <div
              key={index}
              className="font-inter font-bold grid grid-cols-4 gap-4 mb-4 bg-[#121212] text-[#D7D7D7] rounded-[10px] shadow-md p-4"
            >
              <div className="text-left">{prize.title}</div>
              <div className="text-center">{prize.firstPlace}</div>
              <div className="text-center">{prize.secondPlace}</div>
              <div className="text-center">{prize.thirdPlace}</div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-[#202020] flex flex-col items-center">
      <EventTable />
      <PrizeTable />
    </div>
  );
}
