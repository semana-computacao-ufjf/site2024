"use client";
import NextImage from "next/image";
import { useState } from "react";
import { Presenter, Event } from "@prisma/client";

export default function SpeakerGrid({
  presenters,
}: {
  presenters: (Presenter & {
    events: Event[];
  })[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = presenters.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(presenters.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="font-gotham text-white text-7xl text-center mt-16 mb-20">
        Palestrantes
      </h1>
      <div className="max-w-[1600px] grid grid-cols-2 mx-auto gap-8">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center bg-[#2C2B2B] rounded-[30px]"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-32 h-32 overflow-hidden rounded-full">
                <NextImage
                  src={item.imageUrl ?? "/images/unknown.jpg"}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-2xl text-center flex flex-col items-center space-y-1 bg-[#E67119] rounded-[8px] m-12 p-2">
                {item.events.map((event, index) => (
                  <span key={index}>
                    {event.title}
                    {index < item.events.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2 mb-9">
              <p className="text-3xl font-bold mt-9">{item.name}</p>
              <p className="text-2xl mr-8 mt-1">{item.description ?? ""}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center ">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-7 my-20
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
            width={30}
            height={30}
            className=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-7 my-20
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
            width={30}
            height={30}
            className=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </button>
      </div>
    </div>
  );
}
