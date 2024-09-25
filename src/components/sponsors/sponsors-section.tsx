import { Sponsor } from "@prisma/client";
import SponsorModel from "./sponsor-model";

export default function SponsorsSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="bg-cover bg-center bg-[#2C2B2B] relative">
      <div className="relative flex items-center ml-8 sm:ml-[168px] sm:mb-20 pt-10 sm:pt-28">
        <h1 className="font-gotham text-white text-3xl sm:text-7xl font-bold">
          Patrocinadores
        </h1>
        <div className="flex-grow h-[2px] bg-[#E67119] ml-4" />
        <div className="w-6 h-6 bg-[#E67119] rounded-full mr-5 sm:mr-36"></div>
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-12 px-6 mt-[40px] w-full pb-28">
        {sponsors?.map((sponsor) => (
          <div
            className="flex justify-center w-full sm:w-[25%] min-w-[150px]"
            key={sponsor.id}
          >
            <SponsorModel sponsor={sponsor} />
          </div>
        ))}
      </div>
    </div>
  );
}
