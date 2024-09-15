import { eventTypes } from "@prisma/client";

const formatEventType = (type: eventTypes): string => {
  switch (type) {
    case "PALESTRA":
      return "Palestra";
    case "MINICURSO":
      return "Minicurso";
    case "COMPETICAO":
      return "Competição";
    case "PROCESSO_SELETIVO":
      return "Processo Seletivo";
    case "VISITA_TECNICA":
      return "Visita Técnica";
    case "SHOW_DE_TALENTOS":
      return "Show de Talentos";
    default:
      return "Evento";
  }
};

export default formatEventType;
