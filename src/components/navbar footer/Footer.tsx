"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#2C2B2B] py-14 sm:py-20">
      <h1 className="font-gotham text-white text-3xl sm:text-7xl text-start font-bold ml-8 sm:ml-[168px]">
        Contato
      </h1>
      <div className="text-xl sm:text-4xl flex flex-col sm:flex-row justify-start space-y-6 sm:space-y-0 sm:space-x-6 ml-8 sm:ml-[168px] pt-16 sm:pb-14">
        <div className="flex items-center space-x-4 pb-3 sm:pb-0">
          <a href="tel:+5524999114310" className="text-3xl">
            <PhoneIcon style={{ color: "white", fontSize: "45px" }} />
          </a>
          <span>(xx) xxxx-xxxx</span>
        </div>

        <div className="flex items-center space-x-4 pb-3 sm:pb-0">
          <a href="mailto:email@example.com" className="text-3xl">
            <EmailIcon style={{ color: "white", fontSize: "45px" }} />
          </a>
          <span>abcde@gmail.com</span>
        </div>

        <div className="flex items-center space-x-4 pb-0 sm:pb-0">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
          >
            <InstagramIcon style={{ color: "white", fontSize: "45px" }} />
          </a>
          <span>@intermidiaufv</span>
        </div>
      </div>
    </footer>
  );
}
