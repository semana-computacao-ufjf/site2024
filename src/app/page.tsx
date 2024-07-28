import FAQSession from "@/components/faq-session";
import SponsorsSession from "@/components/sponsors-session";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-2xl">
      </div>
      <SponsorsSession />
      <FAQSession />
    </main>
  );
}
