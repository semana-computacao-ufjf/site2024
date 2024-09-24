import NextImage from "next/image";
import { useState, useEffect } from "react";
import { Presenter, Event } from "@prisma/client";
import formatEventType from "@/util/formatEventType";
import EventsModal from "./eventsModal";

interface SpeakerGridProps {
  presenters: (Presenter & { events: Event[] })[];
}

export default function SpeakerGrid({ presenters }: SpeakerGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedEvents, setSelectedEvents] = useState<Event[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = presenters.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(presenters.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleEventClick = (events: Event[]) => {
    setSelectedEvents(events);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvents(null);
  };

  return (
    <div className="overflow-x-auto">
      <div className="max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 mx-auto gap-8">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center w-11/12 sm:w-full mx-auto sm:mx-0 bg-[#2C2B2B] rounded-[30px] p-6"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 sm:w-32 sm:h-32 overflow-hidden rounded-full mb-2 sm:mb-3">
                <NextImage
                  src={item.imageUrl ?? "/images/unknown.jpg"}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="text-xl sm:text-2xl text-center flex justify-wrap items-center space-y-1 bg-[#E67119] rounded-[8px] sm:py-3 m-12 p-2 cursor-pointer"
                onClick={() => handleEventClick(item.events)}
              >
                <div>
                  {item.events.map((event, index) => (
                    <span key={index}>
                      {formatEventType(event.eventType)}
                      {index < item.events.length - 1 && ", "}
                    </span>
                  ))}
                </div>
                <span className="grid place-items-center rounded-full ml-2 w-9 h-9 sm:w-12 sm:h-12">
                  <NextImage
                    src="/icons/info.png"
                    alt="Detalhes"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full invert"
                  />
                </span>
              </div>
            </div>

            <div className="space-y-2 text-start sm:text-left">
              <p className="text-xl sm:text-3xl font-bold sm:mt-6">
                {item.name}
              </p>
              <p className="text-sm font-normal sm:text-2xl max-h-36 overflow-y-auto sm:max-h-56 sm:overflow-y-auto">
                {item.description ?? ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-7 my-6 mb-16 sm:mb-20 sm:mt-14
      ${
        currentPage === 1
          ? "bg-[#202020] border-2 border-[#E67119]"
          : "bg-[#E67119] text-white"
      } 
      disabled:cursor-not-allowed`}
        >
          <NextImage
            src="/images/left-arrow.svg"
            alt="Página anterior"
            width={20}
            height={20}
            className="sm:w-30 sm:h-30"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-7 my-6 mb-16 sm:mb-20 sm:mt-14
      ${
        currentPage === totalPages
          ? "bg-[#202020] border-2 border-[#E67119]"
          : "bg-[#E67119] text-white"
      } 
      disabled:cursor-not-allowed`}
        >
          <NextImage
            src="/images/right-arrow.svg"
            alt="Página posterior"
            width={20}
            height={20}
            className="sm:w-30 sm:h-30"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </button>
      </div>
      <EventsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        events={selectedEvents}
      />
    </div>
  );
}
