import { getAllSponsors } from "@/app/api/fetch/sponsor.fetch";
import { Sponsor } from "@/types/sponsor";
import Image from "next/image";

async function getSponsors() {
  try {
    const response = await getAllSponsors();
    console.log(response);
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
    <div className="w-full bg-white text-black flex flex-col  text-center py-10">
      <h1 className="text-5xl">Patrocinadores</h1>
      <div className="flex flex-wrap mt-[40px] w-full justify-center ">
        {sponsors?.map((sponsor) => (
          <div key={sponsor.id}>
            <Image
              width={200}
              height={200}
              src={sponsor.image.url}
              alt={sponsor.name}
              title={sponsor.name}
              className="rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
