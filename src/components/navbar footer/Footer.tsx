'use client'
import NextImage from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="relative w-full flex items-center justify-center min-h-[200px] md:min-h-[150px] font-viga">
      <div className="absolute inset-0">
        <NextImage
          src="/images/footer-background.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          alt="Footer background"
          quality={100}
          className="z-0"
        />
      </div>
      <div className="relative z-10 w-full text-center grid grid-cols-1 md:grid-cols-3 eventLogo:grid-cols-4 gap-5 md:gap-10 eventLogo:gap-20 p-5 items-start">
        <div className=" items-center justify-center hidden eventLogo:block">
          <NextImage
          className=""
            width={150}
            height={150}
            src="/images/white-logo.png"
            alt="Logo Semana da Computação 2024"
            layout="intrinsic"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-2xl font-bold">Realização:</p>
          <div className="flex  gap-5 justify-center items-center md:flex-col eventLogo:flex-row">
            <NextImage
              width={179}
              height={41}
              src="/images/code-logo.png"
              alt="Logo Code Jr."
              layout="intrinsic"
              objectFit="contain"
              className="max-w-full h-auto"
            />
            <NextImage
              width={81}
              height={31}
              src="/images/dcc-logo.png"
              alt="Logo DCC-UFJF."
              layout="intrinsic"
              objectFit="contain"
              className="max-w-full h-auto"
            />
            <NextImage
              width={81}
              height={61}
              src="/images/ufjf-logo.png"
              alt="Logo UFJF."
              layout="intrinsic"
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start  justify-center">
          <p className="text-white text-2xl font-bold mb-2">Contato:</p>
          <div className="text-white text-left">
            <p className="mb-5"><span className="underline">Telefone</span>: <a href="tel:+32321023327">(32) 2102-3327</a> (Secretaria do DCC)</p>
            <p><span className="underline">Endereço</span>: Campus Universitário, Rua José Lourenço Kelmer, s/n - São Pedro, Juiz de Fora - MG, 36036-900 </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-2xl font-bold mb-2">Nossas redes</p>
          <div className="flex flex-row items-center gap-3 md:flex-col socialMediaAdjust:flex-row">
            <a href="https://www.instagram.com/codejr/" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <InstagramIcon style={{ color: 'white', fontSize: '35px' }} />
            </a>
            <a href="https://www.facebook.com/codeempresajunior/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <FacebookIcon style={{ color: 'white', fontSize: '35px' }} />
            </a>
            <a href="" className="text-3xl">
              <EmailIcon style={{ color: 'white', fontSize: '35px' }} />
            </a>
            <a href="https://www.linkedin.com/company/codejr/" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <LinkedInIcon style={{ color: 'white', fontSize: '35px' }} />
            </a>
            <a href="+5524999114310" className="text-3xl">
              <PhoneIcon style={{ color: 'white', fontSize: '35px' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
