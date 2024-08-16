import { Sponsor } from "@/types/sponsor";
import SponsorModel from "./sponsor-model";

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

export default async function SponsorsSection({
  sponsors,
}: SponsorsSectionProps) {
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
