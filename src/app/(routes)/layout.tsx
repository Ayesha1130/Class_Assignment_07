
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
   
    </div>
  );
};

export default layout;
