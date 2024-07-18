import ContactForm from "@/components/contact-form";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-screen min-h-screen flex py-24 bg-[url('/dark-purple-gradient.png')] bg-cover">
      <div className="w-full flex-col space-y-4 px-16">
        <h1 className="text-5xl mb-16  font-viga">Contato</h1>
        <div className="flex w-full space-x-10">
          <div className="w-1/2">
            <ContactForm />
          </div>
          <div className="flex w-1/2">
            <Image
              src="/ice-map.png"
              alt="Contato"
              width={900}
              height={900}
              className=" border-[3px] border-purple-700 rounded-3xl"
            />
          </div>
        </div>
        <div className="flex w-full space-x-16 ">
          <h1 className="text-2xl w-1/2 font-viga font-bold">
            Tel: (32) 2102-3327 (Secretaria do DCC)
          </h1>
          <h1 className="text-2xl w-1/2 font-quicksand font-bold">
            Endereço: Campus Universitário, Rua José Lourenço Kelmer, s/n - São
            Pedro, Juiz de Fora - MG, 36036-900
          </h1>
        </div>
      </div>
    </div>
  );
}
