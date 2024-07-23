import { Faq } from "@/types/faq";

const Faqs: Faq[] = [
  {
    answer:
      "Para participar é preciso pagar uma taxa de inscrição de 6 reais e encaminhar junto com suas informações no formulário seguinte: <a href='https://forms.google.com/semcomp' target='_blank' rel='noopener noreferrer'>https://forms.google.com/semcomp</a>",
    question: "Como faço para participar do evento?",
  },
];

export function getAllFaqs() {
  return Faqs;
}
