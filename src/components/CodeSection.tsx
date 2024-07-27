"use client";
import NextImage from "next/image";

export default function CodeSection() {
  return (
    <div className="bg-white w-full mb-32">
        <div className="flex justify-center mt-8 mb-14">
            <NextImage
                src="/images/codejr-section-logo.png"
                alt="Code Jr."
                width={381}
                height={98}
                className=""
            />
        </div>
        <div className="flex flex-row px-8 w-full max-h-607">
            <div className="leftSide w-1/3  flex ">
            <NextImage
                src="/images/code-members.png"
                alt="Code Jr."
                width={449}
                height={607}
                className=""
            />
            </div>
            <div className="rightSide w-2/3 pt-7 flex flex-col gap-4">
                <p className="px-8 font-quicksand leading-7 text-black font-normal">Fundada em 2014 por alunos da UFJF, <span className="text-codePurple underline">a Code é uma empresa júnior atuante no mercado de computação que trabalha com soluções tecnológicas como sites, sistemas e aplicativos.</span>  Como filosofia interna, buscamos sempre melhorar tudo o que estiver a nosso alcance, visando sempre oferecer serviços de melhor qualidade a quem merece o melhor. Com uma cultura voltada ao cliente, estamos sempre investindo em novas tecnologias e qualificação dos membros, para que nossassoluções sejam entregues com muita eficiência e qualidade,simplesmente por acreditar que a satisfação de nossos clientes precisa ser completa. Atualmente estamos entre as melhores empresas juniores de TI da zona da mata, sendo essa conquista de muito orgulho entre os membros da empresa, o que é reflexo do comprometimento de todos e da clareza dos nossos objetivos.</p>
                <p className="px-8 font-quicksand leading-7 text-black font-normal">Com uma cultura voltada ao cliente, estamos sempre investindo emnovas tecnologias e qualificação dos membros, <span className="text-codePurple underline">para que nossassoluções sejam entregues com muita eficiência e qualidade</span>, simplesmente por acreditar que a satisfação de nossos clientes precisa ser completa.</p>
                <p className="px-8 font-quicksand leading-7 text-black font-normal">Atualmente estamos entre as melhores empresas juniores de TI da zona da mata, sendo essa conquista de muito orgulho entre os membros da empresa, o que é reflexo do comprometimento de todos e da clareza dos nossos objetivos.</p>

            </div>
        </div>
    </div>
  )
}