export default function Workshop() {
  return (
    <div className="flex flex-col bg-cover bg-center bg-[#2C2B2B] relative">
      <div className="relative flex items-center ml-8 sm:ml-[168px] sm:mb-20 pt-10 sm:pt-18">
        <h1 className="font-gotham text-white text-3xl sm:text-7xl font-bold">
          XIV Workshop DCC
        </h1>
        <div className="flex-grow h-[2px] bg-[#E67119] ml-4" />
        <div className="w-6 h-6 bg-[#E67119] rounded-full mr-5 sm:mr-36"></div>
      </div>
      <h2 className="font-gotham sm:text-3xl relative flex items-center ml-8 sm:ml-[168px] mr-5 sm:mr-36 text-white">
        O Departamento de Ciência da Computação convida estudantes de graduação
        e pós-graduação da UFJF a submeterem artigo de seus trabalhos referentes
        a temas relevantes à investigação e aplicação na área de Ciência da
        Computação. O Workshop do DCC é um fórum dedicado à apresentação e
        discussão de pesquisas, finalizadas ou em desenvolvimento, por
        estudantes de graduação ou pós-graduação.
      </h2>

      <button
        className="bg-[#E67119] font-gotham w-4/5 sm:w-1/2 font-bold text-white text-xl sm:text-5xl text-center items-center rounded-[13px] border-2 border-[#E67119] hover:bg-transparent hover:text-[#E67119] button-transition mx-auto mt-5 mb-6 sm:mt-10 sm:mb-16 p-2 sm:p-3"
        onClick={() => {
          window.open("http://relatedcc.nrc.ice.ufjf.br", "_blank");
        }}
      >
        Inscreva-se
      </button>
    </div>
  );
}
