'use client'
interface TitleProps {
    Title: string;
  }
export default function Title({ Title }: TitleProps) {
  return (
    <h1 className="text-5xl text-white text-center font-viga font-normal mb-10">{Title}</h1>
  );
}
