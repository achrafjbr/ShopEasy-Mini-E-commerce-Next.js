"use client";
import { useState } from "react";
import { ProductContext } from "./context";
import { Product } from "../lib/types/product";
import { shoppingCart } from "../lib/data/product";

function ProductsContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, setProducts] = useState<Product[]>();
  const [productNumber, setProductNumber] = useState<number>(0);

  const addProductHandler = (product: Product) => {
    shoppingCart.push(product);
    setProducts([...products!, product]);
    setProductNumber(products!.length);
  };

  const deleteProductHandler = (id: number) => {
    setProducts(products?.filter((product) => product.id != id));
    setProductNumber(products!.length);
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct: addProductHandler,
        productCartCount: productNumber,
        deleteProduct: deleteProductHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductsContextProvider;
