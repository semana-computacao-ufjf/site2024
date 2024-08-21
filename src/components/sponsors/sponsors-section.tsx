import { Sponsor } from "@prisma/client";
import SponsorModel from "./sponsor-model";

export default function SponsorsSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="w-full text-black flex flex-col  text-center py-10">
      <div className="flex flex-wrap mt-[40px] w-full gap-24 px-6 justify-center ">
        {sponsors?.map((sponsor) => (
          <SponsorModel sponsor={sponsor} key={sponsor.id} />
        ))}
      </div>
    </div>
  );
}
