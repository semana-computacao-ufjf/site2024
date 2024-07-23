import FAQSession from "@/components/faq-session";
import SponsorsSession from "@/components/sponsors-session";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-2xl">
        <h1>Site Semana Comp UFJF 2024</h1>
      </div>
      <SponsorsSession />
      <FAQSession />
    </main>
  );
}
