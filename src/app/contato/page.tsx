import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="w-screen flex px-16 py-24 ">
      <div className="w-1/2 space-y-16 flex-col ">
        <h1 className="text-5xl ">Contato</h1>
        <ContactForm />
      </div>
      <div className="w-1/2">Localização</div>
    </div>
  );
}
