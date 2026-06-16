"use client";
import React from "react";
import ProductsContextProvider from "../states/ProductsContextProvider";

function Outlete({ children }: { children: React.ReactNode }) {
  return <ProductsContextProvider>{children}</ProductsContextProvider>;
}

export default Outlete;
