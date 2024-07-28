import { Faq } from "@/types/faq";

const Faqs: Faq[] = [
  {
    answer:
      "Para participar é preciso pagar uma taxa de inscrição de 6 reais e encaminhar junto com suas informações no formulário seguinte: <a href='https://forms.google.com/semcomp' target='_blank' rel='noopener noreferrer'>https://forms.google.com/semcomp</a>",
    question: "Como faço para participar do evento?",
  },
  {
    question: "Onde vai acontecer o evento?",
    answer:
      "O evento vai acontecer nas instalações do Instituto de Ciências Exatas da UFJF.",
  },
  {
    question: "Haverá certificados de participação?",
    answer:
      "Sim, haverá certificado de participação, disponibilizado após o evento.",
  },
  {
    question: "Quais são os principais temas que serão abordados?",
    answer: "Pendente de resposta.",
  },
  {
    question: "Quem pode participar?",
    answer:
      "Qualquer pessoa interessada em computação pode participar. Para os minicursos é importante verificar se possui o pré-requisito.",
  },
  {
    question: "Quais são os benefícios de participar da semana da computação?",
    answer:
      "Os benefícios são vários, como capacitação em ferramentas e conceitos usados no mercado, integração entre alunos, docentes e profissionais do mercado. Além da possibilidade de se candidatar a processos seletivos de empresas patrocinadoras ou ganhar algum prêmio nas competições realizadas.",
  },
];

export function getAllFaqs() {
  return Faqs;
}
