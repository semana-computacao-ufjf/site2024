"use client";
interface ButtonProps {
  text?: string;
  redirectTo: string;
}

export default function RedirectButton({ text, redirectTo }: ButtonProps) {
  const handleRedirect = () => {
    window.location.href = redirectTo;
  };

  return (
    <div className="mt-12 flex justify-center">
      <button
        onClick={handleRedirect}
        className="bg-[#FF7506] text-white text-3xl rounded-2xl hover:bg-[#FF7506] px-7 py-4"
      >
        {text}
      </button>
    </div>
  );
}
