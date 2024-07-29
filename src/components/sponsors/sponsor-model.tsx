"use client";

import { Sponsor } from "@/types/sponsor";
import Image from "next/image";
interface SponsorModelProps {
  sponsor: Sponsor;
}
export default function SponsorModel({ sponsor }: SponsorModelProps) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        if (sponsor.contact_url) {
          window.open(sponsor.contact_url, "_blank");
        }
      }}
    >
      <Image
        width={250}
        height={250}
        src={sponsor.image.url}
        alt={sponsor.name}
        title={sponsor.name}
        className="rounded-2xl md:max-h-[250px] md:max-w-[250px]  max-w-[175px] max-h-[175px]"
      />
    </div>
  );
}
