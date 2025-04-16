import { CustomButton, MobileMenuModal } from "@/components";
import Image from "next/image";
import Logo from "@/images/Logotype.svg";
import styles from "@/styles/Navbar.module.css";
import { navItems } from "@/static/data";

const Navbar = () => {
  return (
    <div className="flex items-center py-6 px-12 justify-between border-b border-[#F5F7FB]">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div className="gap-3 font-medium lg:flex hidden">
        {navItems.map((i) => (
          <span key={i} className={styles.navItem}>
            {i}
          </span>
        ))}
      </div>
      <div className="lg:flex gap-4 hidden">
        <CustomButton text="Login" variant="secondary" />
        <CustomButton text="Sign up" variant="primary" />
      </div>
      <MobileMenuModal />
    </div>
  );
};

export default Navbar;
