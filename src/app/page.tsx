import Footer from "@/components/Footer";
import SpeakerTable from '../components/SpeakerTable';
import Title from "@/components/Title";
const speakerData = [
  {
    speakerName: 'John',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Palestra sobre Machine Learning',
    filiation: 'Universidade XYZ',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Jane',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Workshop de Desenvolvimento Web',
    filiation: 'Empresa ABC',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
  {
    speakerName: 'Carlos',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    participation: 'Painel sobre Cybersecurity',
    filiation: 'Instituto DEF',
    pictureURL: '/images/example-photo.png', 
  },
];


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-2xl">
       <h1>Site Semana Comp UFJF 2024</h1>
      </div>
    </main>
    <Title Title="Conheça nossos palestrantes"></Title>
    <SpeakerTable speakerData={speakerData} />
    <Footer></Footer>
    </>
  );
}
