import Slider from "@/components/slider";

interface PresentationProps {
  presentationImages: string[];
}

export default function Presentation({
  presentationImages,
}: PresentationProps) {
  return (
    <>
      <About presentationImages={presentationImages} />
    </>
  );
}

const About = ({ presentationImages }: PresentationProps) => {
  const editionDescription =
    "Neste ano, na edição de 26 anos do evento, a programação prevê palestras e minicursos sobre temas atuais e um espaço de interação entre empresas e a universidade.";

  const cardsTitleClasses =
    "font-gotham text-[#DCDFE5] lg:text-[50px] md:text-[40px] text-[30px] mb-5";
  const cardsDescriptionClasses =
    "font-inter text-[#D7D7D7] lg:text-[24px] md:text-[20px] text-[16px] leading-6 sm:leading-7";

  return (
    <>
      <div className="text-black flex flex-col sectionBreak:flex-row justify-around text-center px-6 gap-6 items-center sectionBreak:items-stretch mb-5">
        <div className="bg-[#202020] w-full sm:w-1/3 p-5 rounded-[20px]">
          <p className={`${cardsTitleClasses}`}>
            <span>Públco alvo </span>
          </p>
          <p
            className={`${cardsDescriptionClasses} font-inter text-[#D7D7D7] `}
          >
            Alunos da área de Computação, empresas e profissionais de tecnologia
            de Juiz de Fora e região.
          </p>
        </div>
        <div className="bg-[#202020] w-full sm:w-1/3 p-5 rounded-[20px]">
          <p className={`${cardsTitleClasses}`}>
            <span>Cursos</span>
          </p>
          <p className={`${cardsDescriptionClasses} font-inter text-[#D7D7D7]`}>
            Alinhados ao mercado: Análise e visualzação de dados,
            Desenvolvimento Web, Aprendizado de Máquina, Chatbots, entre outros.
          </p>
        </div>
        <div className="bg-[#202020] w-full sm:w-1/3 p-5 rounded-[20px]">
          <p className={`${cardsTitleClasses}`}>
            <span>Palestras</span>
          </p>
          <p className={`${cardsDescriptionClasses} font-inter text-[#D7D7D7]`}>
            Temas variados: Ciência de Dados, Inteligência Artificial,
            Blockchain, Empreendedorismo, Modelagem Computacional, entre outros.
          </p>
        </div>
      </div>
      <Slider images={presentationImages} />
      <div className="text-black text-center lg:mx-5 sm:px-2  my-10 sm:mx-20">
        <h1 className="font-gotham text-[#DCDFE5] md:text-[48px] text-[40px] mb-[40px] sm:leading-[64.51px]">
          O Evento
        </h1>
        <div
          className={`font-inter text-[#D7D7D7] text-lg sm:text-2xl leading-6 sm:leading-8 space-y-10`}
        >
          <p>
            A Semana da Computação é um evento anual realizado pelo Departamento
            de Ciência da Computação da Universidade Federal de Juiz de Fora
            durante a Semana do Instituto de Ciências Exatas. Pela primeira vez,
            a Code Empresa Júnior está a frente da organização do evento.
          </p>
          <p>{editionDescription}</p>
        </div>
      </div>
    </>
  );
};
