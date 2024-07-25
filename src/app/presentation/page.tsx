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
    <div className="bg-[rgba(255,255,255,1)] min-h-screen flex flex-col">
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
      <div className="text-black font-normal text-center mx-20 my-10">
        <h1 className="font-viga text-[48px] leading-[64.51px]">O Evento</h1>
        {/* TODO: instalar a fonte quicksand */}
        <div className="font-quicksand text-2xl font-medium leading-8">
          <p>
            A Semana da Computação é um evento anual organizado pelo
            Departamento de Ciência da Computação da Universidade Federal de
            Juiz de Fora, em parceria com a Code Empresa Júnior.
          </p>
          <p>{editionDescription}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around text-black m-5 text-center">
        <div className="bg-[#001FC187] w-full md:w-1/4 aspect-square shadow-[4px_4px_8px_0px_#00000040] p-5 gap-x-[25px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px]">
          <p className="font-viga text-[64px] font-normal">
            {participants} inscritos
          </p>
          <p className="text-[24px] font-normal leading-7">
            Dentre eles, alunos da área de computação da UFJF e região, empresas
            e profissionais de tecnologia.
          </p>
        </div>
        <div className="bg-[#861DCE80] w-full md:w-1/4 aspect-square shadow-[4px_4px_8px_0px_#00000040] p-5 gap-x-[25px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px]">
          <p className="font-viga text-[64px] font-normal">{courses} cursos</p>
          <p className="text-[24px] font-normal leading-7">
            Alinhados ao mercado: Amazon Web Services, NodeJS, Git, Figma,
            React, entre outros.
          </p>
        </div>
        <div className="bg-[#FFBE004D] w-full md:w-1/4 aspect-square shadow-[4px_4px_8px_0px_#00000040] p-5 gap-x-[25px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px]">
          <p className="font-viga text-[64px] font-normal">{talks} palestras</p>
          <p className="text-[24px] font-normal leading-7">
            Temas variados: Inteligência Artificial, Boas práticas no mercado de
            TI, Ciência de Dados, entre outros.
          </p>
        </div>
      </div>
    </>
  );
};
