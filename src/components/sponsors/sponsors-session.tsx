import { getAllSponsors } from "@/app/api/fetch/sponsor.fetch";
import { Sponsor } from "@/types/sponsor";
import Image from "next/image";
import { redirect } from "next/navigation";
import SponsorModel from "./sponsor-model";

async function getSponsors() {
  try {
    const response = await getAllSponsors();

    if (!response) {
      throw new Error("No sponsors found");
    }

    return response as Sponsor[];
  } catch (error) {
    console.error(error);
  }
}

export default async function SponsorsSession() {
  const sponsors = await getSponsors();

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
