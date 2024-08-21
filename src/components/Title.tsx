"use client";
interface TitleProps {
  Title: string;
}

export default function Title({ Title }: TitleProps) {
  return (
    <h1 className="text-5xl font-gotham text-[#DCDFE5] text-center mb-10">
      {Title}
    </h1>
  );
}
