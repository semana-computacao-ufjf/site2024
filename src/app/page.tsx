import FAQSession from "@/components/faq-session";
import SponsorsSession from "@/components/sponsors-session";
import ContactSession from "@/components/contact-session";
import Footer from "@/components/Footer";
import NavBar from "@/components/navBar";
import SpeakerTable from "../components/SpeakerTable";
import Title from "@/components/Title";
import CodeSection from "@/components/CodeSection";
import CardTechnology from "@/components/CardTechnology";

const speakerData = [
  {
    speakerName: 'John',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Palestra sobre Machine Learning',
    filiation: 'Universidade XYZ',
    pictureURL: '/images/example-photo.png',
  },
  {
    speakerName: 'Jane',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Workshop de Desenvolvimento Web',
    filiation: 'Empresa ABC',
    pictureURL: '/images/example-photo.png',
  },
  {
    speakerName: 'Carlos',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#181426]">
      <NavBar />
      <SponsorsSession />
      
      <Title Title="Conheça nossos palestrantes" />
      <SpeakerTable speakerData={speakerData} />
      <div className="bg-white mb-20">
        <CodeSection />
        <div className="flex flex-col sectionBreak:flex-row justify-around px-6 gap-0 sectionBreak:gap-8 items-center sectionBreak:items-stretch">
          <CardTechnology
            image="/images/app-icon.png"
            title="Aplicativos"
            description="Não quer ficar para trás no mundo dos aplicativos? Com o React Native a Code pode ajudar você e a sua empresa!"
          />
          <CardTechnology
            image="/images/web-icon.png"
            title="Sites expositivos"
            description="Deseja divulgar sua marca e ter mais clientes? Nós desenvolvemos um site expositivo profissional para ajudar o seu negócio a alcançar esses objetivos."
          />
          <CardTechnology
            image="/images/laravel-icon.png"
            title="Sistemas"
            description="Deseja modernizar e trazer tecnologia para seu negócio? Com o Laravel, podemos trazer o sistema de gerenciamento mais moderno do mercado!"
          />
        </div>
      </div>
        <ContactSession />
        <FAQSession />
        <Footer />
    </main>
  );
}
