import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
type Props = {
  children: React.ReactNode;
  showHero?: boolean; //? means optional
};

const layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="container-fluid flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
// container mx-auto flex-1 py-10
