import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="max-w-screen min-h-screen flex px-16 py-24 bg-[url('/bg-code.png')] bg-cover">
      <div className="w-1/2 space-y-16 flex-col ">
        <h1 className="text-5xl">Contato</h1>
        <div className="flex-col space-y-2">
          <ContactForm />
          <h1 className="text-sm">Tel: (32) 2102-3327 (Secretaria do DCC)</h1>
        </div>
      </div>
      <div className="w-1/2">Localização</div>
    </div>
  );
}
