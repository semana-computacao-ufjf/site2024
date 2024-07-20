import ContactForm from "@/components/contact-form";
import MapComponent from "@/components/map-component";
import "leaflet/dist/leaflet.css";

export default function ContactSession() {
  return (
    <div className="w-full flex-col space-y-4 xl:px-16 lg:px-8 md:px-10 px-5 md:py-24 py-12 bg-[url('/dark-purple-gradient.png')] bg-cover">
      <h1 className="md:text-5xl text-3xl lg:mb-16 mb-8">Contato</h1>
      <div className="lg:flex lg:w-full lg:justify-between max-lg:flex max-lg:flex-col  max-lg:space-y-10">
        <div className="xl:w-1/2 lg:w-[48%]  max-lg:w-full max-lg:space-y-2 max-lg:flex-col max-lg:flex">
          <ContactForm />
          <label className="lg:hidden max-md:text-sm">
            Tel: (32) 2102-3327 (Secretaria do DCC)
          </label>
        </div>
        <div className="xl:w-1/2 lg:w-[52%] lg:flex max-lg:w-full max-lg:h-[400px] max-lg:space-y-2 max-lg:flex-col max-lg:flex">
          <MapComponent />
          <label className="lg:hidden max-md:text-sm">
            Endereço: Campus Universitário, Rua José Lourenço Kelmer, s/n - São
            Pedro, Juiz de Fora - MG, 36036-900
          </label>
        </div>
      </div>
      <div className="flex max-lg:hidden justify-between w-full  ">
        <h1 className="text-2xl w-1/2 font-bold">
          Tel: (32) 2102-3327 (Secretaria do DCC)
        </h1>
        <h1 className="xl:w-1/2 lg:w-[52%]  text-2xl  font-bold">
          Endereço: Campus Universitário, Rua José Lourenço Kelmer, s/n - São
          Pedro, Juiz de Fora - MG, 36036-900
        </h1>
      </div>
    </div>
  );
}
