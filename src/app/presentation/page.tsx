import Slider from "@/components/slider";

// TODO: query dos logos das empresas
const images = [
  "/images/bronze-solucionar.webp",
  "/images/diamante-4matt.webp",
  "/images/diamante-levty.webp",
  "/images/diamante-rerum.webp",
  "/images/ouro-codi.webp",
  "/images/prata-ciadoleite.webp",
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

  return (
    <>
      <div className="text-black font-normal text-center mx-5 my-10 sm:mx-20">
        <h1 className="font-viga text-[32px] sm:text-[48px] leading-[40px] sm:leading-[64.51px]">
          O Evento
        </h1>
        {/* TODO: instalar a fonte quicksand */}
        <div className="font-quicksand text-lg sm:text-2xl font-medium leading-6 sm:leading-8">
          <p>
            A Semana da Computação é um evento anual organizado pelo
            Departamento de Ciência da Computação da Universidade Federal de
            Juiz de Fora, em parceria com a Code Empresa Júnior.
          </p>
          <p>{editionDescription}</p>
        </div>
      </div>
      <div className="font-bold text-black flex flex-col sectionBreak:flex-row justify-around text-center px-6 gap-6 items-center sectionBreak:items-stretch mb-5">
        <div className="bg-[#001FC187] w-full sm:w-1/3 shadow-[4px_4px_8px_0px_#00000040] p-5 rounded-[20px]">
          <p className="font-viga text-[64px] lg:text-[64px] md:text-[48px] sm:text-[40px] font-normal">
            <span>{participants}</span> inscritos
          </p>
          <p className=" text-[24px] md:text-[24px] sm:text-[24px] lg:text-[24px] font-normal leading-6 sm:leading-7">
            Dentre eles, alunos da área de computação da UFJF e região, empresas
            e profissionais de tecnologia.
          </p>
        </div>
        <div className="bg-[#861DCE80] w-full sm:w-1/3 shadow-[4px_4px_8px_0px_#00000040] p-5 rounded-[20px]">
          <p className="font-viga text-[64px] lg:text-[64px] md:text-[48px] sm:text-[40px] font-normal">
            <span>{courses}</span> cursos
          </p>
          <p className=" text-[24px] md:text-[24px] sm:text-[24px] lg:text-[24px] font-normal leading-6 sm:leading-7">
            Alinhados ao mercado: Amazon Web Services, NodeJS, Git, Figma,
            React, entre outros.
          </p>
        </div>
        <div className="bg-[#FFBE004D] w-full sm:w-1/3 shadow-[4px_4px_8px_0px_#00000040] p-5 rounded-[20px]">
          <p className="font-viga text-[64px] lg:text-[64px] md:text-[48px] sm:text-[40px] font-normal">
            <span>{talks}</span> palestras
          </p>
          <p className=" text-[24px] md:text-[24px] sm:text-[24px] lg:text-[24px] font-normal leading-6 sm:leading-7">
            Temas variados: Inteligência Artificial, Boas práticas no mercado de
            TI, Ciência de Dados, entre outros.
          </p>
        </div>
      </div>
    </>
  );
};
