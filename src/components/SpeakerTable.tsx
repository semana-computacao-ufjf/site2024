"use client";
import NextImage from "next/image";
import { useState } from "react";

interface Speaker {
  speakerName: string;
  description: string;
  participation: string;
  filiation: string;
  pictureURL: string;
}

interface SpeakerTableProps {
  speakerData: Speaker[];
}

export default function SpeakerTable({ speakerData }: SpeakerTableProps) {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 2;

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Speaker[] = speakerData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages: number = Math.ceil(speakerData.length / itemsPerPage);

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
    <div className="overflow-x-auto shadow-md">
      <table className="mx-auto  w-10/12 border-separate border-spacing-y-3 p-2">
        <thead>
          <tr className="bg-white ">
            <th className="px-3 py-3 font-inter text-center border-l-transparent p-2 rounded-tl-xl rounded-bl-xl">Palestrante</th>
            <th className="px-3 py-3 font-inter text-center table-responsive:block hidden">Descrição</th>
            <th className="px-3 py-3 font-inter text-center">Participação</th>
            <th className="px-3 py-3 font-inter text-center border-r-0 p-2 rounded-tr-xl rounded-br-xl">Filiação</th>
          </tr>
        </thead>
        <tbody className="space-y-4">
          {currentItems.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-tableGray" : "bg-gray-100"
              } space-y-2`}
            >
              <td className="px-4 py-2 mt-2 border-l p-2 rounded-tl-xl rounded-bl-xl">
                <div className="flex flex-col items-center">
                  <NextImage
                    src={item.pictureURL}
                    alt={item.speakerName}
                    width={120}
                    height={120}
                    className="pt-3"
                  />
                  <p
                    className={`px-4 py-2 font-inter text-center w-full truncate ${
                      index % 2 === 0 ? "text-white" : "text-black"
                    }`}
                  >
                    {item.speakerName}
                  </p>
                </div>
              </td>
              <td
                className={` w-100 h-32 px-4 font-inter py-2 text-base table-responsive:block hidden  ${
                  index % 2 === 0 ? "text-white" : "text-black"
                }`}
              >
                <p className="max-w-5xl line-clamp-4">{item.description}</p>
              </td>
              <td
                className={`px-4 py-2 font-inter text-base text-center ${
                  index % 2 === 0 ? "text-white" : "text-black"
                }`}
              >
                <p className="max-w-2xl ">{item.participation}</p>
              </td>
              <td
                className={`px-4 py-2 mt-2 border-r p-2 text-base rounded-tr-xl rounded-br-xl text-center ${
                  index % 2 === 0 ? "text-white" : "text-black"
                }`}
              >
                <p className="max-w-2xl truncate">{item.filiation}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 items-center mb-5 ">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-white text-black rounded-xl disabled:opacity-50 w-10 h-10" 
        >
          <NextImage
                    src="/images/arrow_back.svg"
                    alt="Página anterior"
                    width={20}
                    height={20}
                    className=""
                  />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 bg-codePurple rounded-xl ${
              currentPage === index + 1
                ? "bg-codePurple text-white"
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-white text-black rounded-xl disabled:opacity-50 w-10 h-10"
        >
          <NextImage
                    src="/images/arrow_front.svg"
                    alt="Página posterior"
                    width={20}
                    height={20}
                    className=""
                  />
        </button>
      </div>
    </div>
  );
}
