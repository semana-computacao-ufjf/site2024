import { SpeakerData } from "@/types/speaker";
import { Event, EventType } from "@/types/event";
import { Presenter } from "@/types/presenter";
const fakeEventApi = () => {
    const events: Event [] = [
      {
        id: "1",
        title: "Palestra sobre Inteligência Artificial",
        description: {
          raw: "Palestra sobre redes neurais.",
        },
        event_type: EventType.palestra,
        presenters: [
          {
            id: "1",
            name: "Luciana",
            events: [],
          },
          {
            id: "2",
            name: "Carlos Cristiano",
            events: [],
          },
        ],
        schedule: new Date("2024-11-26T10:00:00Z"),
        location: "Auditório DCC",
      },
      {
        id: "2",
        title: "Minicurso de React",
        description: {
          raw: "Aprenda React com um jogo iddle clicker.",
        },
        event_type: EventType.minicurso,
        presenters: [
          {
            id: "3",
            name: "Gabriel",
            events: [],
          },
        ],
        schedule: new Date("2024-11-27T14:00:00Z"),
        location: "Lab 205",
      },
      {
        id: "3",
        title: "Competição de Programação",
        description: {
          raw: "Competição de lógica de programação.",
        },
        event_type: EventType.competicao,
        presenters: [
          {
            id: "4",
            name: "Caniato",
            events: [],
          },
        ],
        schedule: new Date("2024-11-28T09:00:00Z"),
        location: "Lab 205",
      },
      {
        id: "1",
        title: "Palestra sobre Computação Evolucionista",
        description: {
          raw: "Palestra PSO e ACO.",
        },
        event_type: EventType.palestra,
        presenters: [
          {
            id: "1",
            name: "Luciana",
            events: [],
          },
          {
            id: "2",
            name: "Carlos Cristiano",
            events: [],
          },
        ],
        schedule: new Date("2024-11-26T12:00:00Z"),
        location: "Auditório DCC",
      },
    ];
  
    return events;
  };

const fakeSpeakerApi = () => {
  const speakers: SpeakerData [] = [
    {
      speakerName: "John",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      participation: "Palestra sobre Machine Learning",
      filiation: "Universidade XYZ",
      pictureURL: "/images/example-photo.png",
    },
    {
      speakerName: "Jane",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      participation: "Workshop de Desenvolvimento Web",
      filiation: "Empresa ABC",
      pictureURL: "/images/example-photo.png",
    },
    {
      speakerName: "Carlos",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      participation: "Painel sobre Cybersecurity",
      filiation: "Instituto DEF",
      pictureURL: "/images/example-photo.png",
    },
  ];
return speakers}
  
  export { fakeEventApi , fakeSpeakerApi };