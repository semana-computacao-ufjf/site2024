"use client";

import { Sponsor } from "@prisma/client";
import Image from "next/image";

export default function SponsorModel({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        if (sponsor.contactUrl) {
          window.open(sponsor.contactUrl, "_blank");
        }
      }}
    >
      <Image
        width={250}
        height={250}
        src={sponsor.imageUrl ?? ""}
        alt={sponsor.name}
        title={sponsor.name}
        className="rounded-2xl md:max-h-[250px] md:max-w-[250px]  max-w-[175px] max-h-[175px]"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
  );
}
