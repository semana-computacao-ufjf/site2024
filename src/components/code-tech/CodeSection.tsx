"use client";
import NextImage from "next/image";
import { quickSand } from "@/app/fonts";
export default function CodeSection() {
  return (
    <div className="w-full mb-10 ">
      <div className="flex justify-center  mb-14">
        <NextImage
          src="/images/codejr-section-logo.png"
          alt="Code Jr."
          width={381}
          height={98}
          className="mt-10"
        />
      </div>
      <div className="flex flex-col sectionBreak:flex-row px-8 w-full  ">
        <div className="leftSide w-full sectionBreak:w-1/3  flex items-center px-10 sectionBreak:px-0">
          <NextImage
            src="/images/code-members.png"
            alt="Code Jr."
            width={449}
            height={607}
            className="hidden sectionBreak:block"
          />
          <NextImage
            src="/images/code-members.jpg"
            alt="Code Jr."
            width={1600}
            height={900}
            className=" block sectionBreak:hidden border-2 rounded-xl border-codePurple"
          />
        </div>
        <div className={`rightSide w-full sectionBreak:w-2/3 pt-7 flex flex-col font-normal gap-4 sectionBreak:gap-4 ${quickSand.className}`}>
        <p className="px-8  leading-7 text-black font-normal">
            Fundada em 2014 por alunos da UFJF,{" "}
            <span className="text-codePurple underline">
              a Code é uma empresa júnior atuante no mercado de computação que
              trabalha com soluções tecnológicas como sites, sistemas e
              aplicativos.
            </span>{" "}
            Como filosofia interna, buscamos sempre melhorar tudo o que estiver
            a nosso alcance, visando sempre oferecer serviços de melhor
            qualidade a quem merece o melhor.{" "}
          </p>
          <p className="px-8  leading-7 text-black font-normal">
            Com uma cultura voltada ao cliente, estamos sempre investindo
            emnovas tecnologias e qualificação dos membros,{" "}
            <span className="text-codePurple underline">
              para que nossassoluções sejam entregues com muita eficiência e
              qualidade
            </span>
            , simplesmente por acreditar que a satisfação de nossos clientes
            precisa ser completa.
          </p>
          <p className={`px-8 leading-7 text-black font-normal ${quickSand.className}`}>
          Atualmente estamos entre as melhores empresas juniores de TI da zona
            da mata, sendo essa conquista de muito orgulho entre os membros da
            empresa, o que é reflexo do comprometimento de todos e da clareza
            dos nossos objetivos.
          </p>
        </div>
      </div>
    </div>
  );
}
