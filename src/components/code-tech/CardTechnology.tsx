"use client";
import NextImage from "next/image";

interface CardProps {
  title?: string;
  image: string;
  description?: string;
}
export default function CardTechnology({
  title,
  image,
  description,
}: CardProps) {
  return (
    <div className="relative card w-card-width h-card-heihgt border-1 rounded-xl border-[#FF7506] mt-16">
      <div>
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
          <NextImage
            src={image}
            alt={title || "Image"}
            width={100}
            height={100}
            className="rounded-full "
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <h1 className="font-gotham text-[#DCDFE5] text-center text-2xl sm:text-3xl uppercase pt-16">
          <p>{title}</p>
        </h1>
      </div>
      <p
        className={
          "mt-3 text-center font-inter text-[#D7D7D7] text-2xl card-responsive3:text-lg card-responsive2:text-xl card-responsive:text-2xl px-8 pb-4"
        }
      >
        {description}
      </p>
    </div>
  );
}
