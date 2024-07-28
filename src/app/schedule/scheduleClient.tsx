"use client";

import { useState } from "react";
import { Event, EventType } from "@/types/event";
import { getWeekday } from "@/util/getWeekday";

interface ScheduleClientProps {
  events: Event[];
}

const formatEventType = (type: number): string => {
  switch (type) {
    case 0:
      return "Palestra";
    case 1:
      return "Minicurso";
    case 2:
      return "Competição";
    case 3:
      return "Processo Seletivo";
    case 4:
      return "Visita Técnica";
    case 5:
      return "Show de Talentos";
    default:
      return "Evento";
  }
};

export default function ScheduleClient({ events }: ScheduleClientProps) {
  const backgroundImage = "/images/fundoPostEscuro.png";
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
        <h1 className="font-viga text-[36px] sm:text-[48px] font-normal text-center mt-10">
          Programação
        </h1>
        <div className="text-black w-full">
          <div className="mt-5 mb-10 flex justify-center gap-2">
            {["SEG", "TER", "QUA", "QUI", "SEX"].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`w-1/5 sm:w-1/12 m-2 p-2 rounded-[30px] ${
                  selectedDay === day
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="px-4 sm:px-6 lg:px-20">
            <div className="overflow-x-auto rounded-[30px]">
              <table className="min-w-full divide-y divide-gray-200 w-full h-[224px] gap-[10px]">
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedEvents.map((event, index) => (
                    <tr
                      key={event.id}
                      className={`${
                        index % 2 === 0
                          ? "bg-white text-black"
                          : "bg-[rgba(49,49,49)] text-white"
                      }`}
                    >
                      <td className="px-2 py-4 whitespace-nowrap text-center relative">
                        <div className="text-sm font-medium flex flex-col items-center pl-4">
                          <img
                            src={`/icons/${EventType[event.event_type]}.png`}
                            alt={EventType[event.event_type]}
                            className={`h-8 w-8 ${
                              index % 2 !== 0 ? "invert" : ""
                            }`}
                          />
                          <span className="mt-2 font-bold">
                            {formatEventType(event.event_type)}
                          </span>
                        </div>
                        <span className="separator"></span>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-left relative">
                        <div className="text-sm font-medium">{event.title}</div>
                        {event.description && (
                          <div className="text-sm mt-1">
                            {event.description.raw}
                          </div>
                        )}
                        <span className="separator"></span>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-center relative">
                        <div className="text-sm font-bold pl-4">
                          {new Intl.DateTimeFormat("pt-BR", {
                            timeStyle: "short",
                          }).format(new Date(event.schedule))}
                        </div>
                        <span className="separator"></span>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-center">
                        <div className="text-sm pl-4">{event.location}</div>
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

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-white flex flex-col items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <EventTable />
    </div>
  );
}
