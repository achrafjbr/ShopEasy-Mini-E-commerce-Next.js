"use client";
import { useEffect, useState } from "react";
import { ProductContext } from "./context";
import { Product, ProductState } from "../lib/types/product";
import { shoppingCart } from "../lib/data/product";
import { products as productList } from "../lib/data/product";
import { getProducts } from "../actions/cart";

function ProductsContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const [pending, setIsPending] = useState(false);

  const addProductHandler = (product: Product): void => {
    setIsPending(true);
    shoppingCart.push(product);
    setProducts([...products, product]);
    setIsAdded(true);
  };

  const deleteProductHandler = (id: number) => {
    setProducts(products?.filter((product) => product.id != id));
  };

  const getProductHandler = async () => await getProducts();

  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 1000);
  });

  return (
    <ProductContext.Provider
      value={{
        getProducts: getProductHandler,
        addProduct: addProductHandler,
        deleteProduct: deleteProductHandler,
        productCartCount: products.length,
        isAdded: isAdded,
        pending: pending,
        products: products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductsContextProvider;
