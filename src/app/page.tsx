import Banner from "@/components/Banner";
import Buynow from "@/components/Buynow";
import Chooseus from "@/components/Chooseus";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <Companies />
      <Products />
      <Chooseus />
      <Buynow />
      <Footer />
    </div>
  );
};

export default page;
