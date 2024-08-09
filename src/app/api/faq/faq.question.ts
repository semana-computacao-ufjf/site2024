import { Faq } from "@/types/faq";

const Faqs: Faq[] = [
  {
    answer: "A definir",
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
    answer:
      "Os temas estarão relacionado a Ciência de Dados, Inteligência Artificial, Segurança, Empreendedorismo e boas práticas para o mercado de TI.",
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
