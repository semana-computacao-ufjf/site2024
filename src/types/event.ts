import { Presenter } from "./presenter";

export type EventDetail = {
  id: string;
  title: string;
  description?: {
    raw: string;
  };
  event_type: EventType;
  presenters: Presenter[];
  schedule: Date;
  location: string;
};

export enum EventType {
  palestra,
  minicurso,
  competicao,
  processo_seletivo,
  visita_tecnica,
  show_de_talentos,
}
