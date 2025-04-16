import Logo from "@/images/Logotype.svg";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-8 md:p-12">
      <div className="flex flex-col md:flex-row justify-between py-8 px-4 border-b border-[#E8E6F9]">
        <Image src={Logo} alt="logo" />
        <div className="flex gap-8 font-medium mt-4 md:mt-0 text-[#8b8b93] flex-wrap justify-center">
          <span>HELP CENTER</span>
          <span>FAQ</span>
          <span>TERMS & PRIVACY</span>
        </div>
      </div>
      <div className="py-8 flex justify-between flex-col md:flex-row items-center">
        <span className="font-medium text-[#8b8b93]">©2021 Estatery. All rights reserved</span>
        <div className="flex gap-8 mt-4 md:mt-0">
          <FaFacebookF size={20} color="#8b8b93" />
          <FaInstagram size={20} color="#8b8b93" />
          <FaTwitter size={20} color="#8b8b93" />
          <FaLinkedin size={20} color="#8b8b93" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
