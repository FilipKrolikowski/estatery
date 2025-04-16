import React, { ReactNode } from "react";
import { Navbar, Footer } from "@/components";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div>{children}</div>

      <Footer />
    </>
  );
}

export default Layout;
