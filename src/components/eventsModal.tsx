import { FC } from "react";
import { Event } from "@prisma/client";

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: Event[] | null;
}

const EventsModal = ({ isOpen, onClose, events }: EventsModalProps) => {
  if (!isOpen || !events) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#2C2B2B] rounded-[30px] p-4 sm:p-8 max-w-xl w-[70%] sm:w-full grid grid-cols-1 max-h-screen overflow-y-auto">
        <div className="flex justify-end">
          <button className="flex flex-row" onClick={onClose}>
            <div className="bg-[#E67119] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <img
                src={"/icons/close.png"}
                className="h-10 w-10 object-contain invert"
                alt="info"
              />
            </div>
          </button>
        </div>
        <div className="font-gotham flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Eventos</h2>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li
                key={index}
                className="bg-cover bg-no-repeat bg-[url('/images/dotsbg.png')] p-4 rounded-lg w-full"
              >
                <h3 className="text-regular sm:text-xl font-bold mb-2 border-b-2 border-[#E67119]">
                  {event.title}
                </h3>
                <h3 className="text-regular sm:text-xl font-bold mb-2">
                  <div>{event.eventType}</div>
                  <div>
                    {event.schedule.toLocaleDateString()} de{" "}
                    {new Intl.DateTimeFormat("pt-BR", {
                      timeStyle: "short",
                    }).format(new Date(event.schedule))}{" "}
                    às{" "}
                    {new Intl.DateTimeFormat("pt-BR", {
                      timeStyle: "short",
                    }).format(new Date(event.schedule))}
                  </div>
                </h3>
                <p className="text-base">{event.description}</p>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
