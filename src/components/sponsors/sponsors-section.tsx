import { Sponsor } from "@prisma/client";
import SponsorModel from "./sponsor-model";

export default function SponsorsSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="bg-cover bg-center bg-[#2C2B2B]">
      <h1 className="font-gotham text-white text-7xl text-start font-bold ml-[168px] mb-20 pt-28">
        Patrocinadores
      </h1>
      <div className="flex flex-wrap justify-center gap-24 px-6 mt-[40px] w-full pb-28">
        {sponsors?.map((sponsor) => (
          <div
            className="flex justify-center w-[25%] min-w-[250px]"
            key={sponsor.id}
          >
            <SponsorModel sponsor={sponsor} />
          </div>
        ))}
      </div>
    </div>
  );
}
