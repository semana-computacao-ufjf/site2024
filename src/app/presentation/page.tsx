import Slider from "@/components/slider";
import { quickSand } from "../fonts";

// TODO: query dos logos das empresas
const images = [
  "/images/20231025_140937-1-1024x768.jpg",
  "/images/a68cc476-12f6-4b16-9047-762f860abec1.jpeg",
  "/images/Porte-dinmica-4.jpg",
  "/images/Figura-5-Noite-de-jogos-na-Semana-da-ComputacComputacComputacao-da-UFJF-em-2017.png",
];

export default function Presentation() {
  return (
    <div className="bg-[#ffffff] min-h-screen  p-8 flex flex-col">
      <Slider images={images} />
      <About />
    </div>
  );
}

const About = () => {
  // TODO: query da descrição da edição
  const editionDescription =
    "Neste ano, na edição de 26 anos do evento, a programação prevê palestras e minicursos sobre temas atuais e um espaço de interação entre empresas e a universidade.";

  // TODO: query do número de inscritos
  const participants = 516;

  // TODO: query do número de cursos
  const courses = 16;

  // TODO: query do número de cursos
  const talks = 15;

  const cardsTitleClasses =
    " lg:text-[50px] md:text-[40px] text-[30px] font-normal mb-5";
  const cardsDescriptionClasses = ` lg:text-[24px] md:text-[20px] text-[16px] font-normal leading-6 sm:leading-7`;

  return (
    <>
      <div className="text-black font-normal text-center lg:mx-5 sm:px-2  my-10 sm:mx-20">
        <h1 className=" md:text-[48px] text-[40px] mb-[40px] sm:leading-[64.51px]">
          O Evento
        </h1>
        {/* TODO: instalar a fonte quicksand */}
        <div
          className={`${quickSand.className} text-lg sm:text-2xl font-medium leading-6 sm:leading-8 space-y-10`}
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
      <div className="font-bold text-black flex flex-col sectionBreak:flex-row justify-around text-center px-6 gap-6 items-center sectionBreak:items-stretch mb-5">
        <div className="bg-[#001FC187] w-full sm:w-1/3 shadow-[4px_4px_8px_0px_#00000040] p-5 rounded-[20px]">
          <p className={`${cardsTitleClasses}`}>
            <span>Públco alvo </span>
          </p>
          <p className={`${cardsDescriptionClasses} ${quickSand.className} `}>
            Alunos da área de Computação, empresas e profissionais de tecnologia
            de Juiz de Fora e região.
          </p>
        </div>
        <div className="bg-[#861DCE80] w-full sm:w-1/3 shadow-[4px_4px_8px_0px_#00000040] p-5 rounded-[20px]">
          <p className={`${cardsTitleClasses}`}>
            <span>Cursos</span>
          </p>
          <p className={`${cardsDescriptionClasses} ${quickSand.className}`}>
            Alinhados ao mercado: Análise e visualzação de dados,
            Desenvolvimento Web, Aprendizado de Máquina, Chatbots, entre outros.
          </p>
        </div>
        <div className="bg-[#FFBE004D] w-full sm:w-1/3 shadow-[4px_4px_8px_0px_#00000040] p-5 rounded-[20px]">
          <p className={`${cardsTitleClasses}`}>
            <span>Palestras</span>
          </p>
          <p className={`${cardsDescriptionClasses} ${quickSand.className}`}>
            Temas variados: Ciência de Dados, Inteligência Artificial,
            Blockchain, Empreendedorismo, Modelagem Computacional, entre outros.
          </p>
        </div>
      </div>
    </>
  );
};
