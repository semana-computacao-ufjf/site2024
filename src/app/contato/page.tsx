import ContactForm from "@/components/contact-form";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-screen min-h-screen flex py-24 bg-[url('/dark-purple-gradient.png')] bg-cover">
      <div className="w-full flex-col space-y-4 px-16">
        <h1 className="text-5xl mb-16  font-viga">Contato</h1>
        <div className="lg:flex lg:w-full lg:justify-between max-lg:flex max-lg:flex-col  max-lg:space-y-10">
          <div className="xl:w-1/2 lg:w-[48%]  max-lg:w-full max-lg:space-y-2 max-lg:flex-col max-lg:flex">
            <ContactForm />
            <label className="lg:hidden">
              Tel: (32) 2102-3327 (Secretaria do DCC)
            </label>
          </div>
          <div className="xl:w-1/2 lg:w-[52%] lg:flex max-lg:w-full max-lg:space-y-2 max-lg:flex-col max-lg:flex">
            <Image
              src="/ice-map.png"
              alt="Contato"
              width={900}
              height={900}
              className=" border-[3px] border-purple-700 rounded-3xl"
            />
            <label className="lg:hidden">
              Endereço: Campus Universitário, Rua José Lourenço Kelmer, s/n -
              São Pedro, Juiz de Fora - MG, 36036-900
            </label>
          </div>
        </div>
        <div className="flex max-lg:hidden justify-between w-full  ">
          <h1 className="text-2xl w-1/2 font-viga font-bold">
            Tel: (32) 2102-3327 (Secretaria do DCC)
          </h1>
          <h1 className="xl:w-1/2 lg:w-[52%]  text-2xl font-quicksand font-bold">
            Endereço: Campus Universitário, Rua José Lourenço Kelmer, s/n - São
            Pedro, Juiz de Fora - MG, 36036-900
          </h1>
        </div>
      </div>
    </div>
  );
}
