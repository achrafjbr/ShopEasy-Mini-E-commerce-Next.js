"use client";
import React from "react";
import ProductsContextProvider from "../states/ProductsContextProvider";
import NavBar from "./NavBar";
import { Footer } from "./Footer";

function Outlete({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContextProvider>
      <NavBar />
      <div className="p-8">{children}</div>
      <Footer />
    </ProductsContextProvider>
  );
}

export default Outlete;
