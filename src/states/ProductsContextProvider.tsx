"use client";
import { useEffect, useState } from "react";
import { ProductContext } from "./context";
import { Product } from "../lib/types/product";
import { Cart } from "../lib/data/product";

function ProductsContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, setProducts] = useState<Cart<Product, number>[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const [pending, setIsPending] = useState(false);

  const addProductHandler = (product: Product) => {
    setIsPending(true);
    setProducts((prev) => {
      const exists = prev.find((p) => p.item.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.item.id === product.id ? { ...p, count: p.count + 1 } : p,
        );
      }

      return [...prev, { item: product, count: 1 }];
    });

    setIsAdded(true);
  };

  const deleteProductHandler = (id: number) => {
    setProducts(products?.filter((product) => product.item.id != id));
  };

  const totalProductsHandler = (): number => {
    let sum = 0;
    for (const product of products) {
      sum += product.item.price * product.count;
    }
    return sum;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 500);
  });

  const howManyItemInCart = (): number => {
    let itemNumber = 0;
    for (const product of products) {
      itemNumber += product.count;
    }
    return itemNumber;
  };

  const incrementProductNumber = (id: number) => {
    const product = products.find((p) => p.item.id === id);
    setProducts([...products, { ...product!, count: product!.count + 1 }]);
  };
  const decrementProductNumber = (id: number) => {
    const product = products.find((p) => p.item.id === id);
    if (product!.count > 0) {
      setProducts([...products, { ...product!, count: product!.count - 1 }]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct: addProductHandler,
        deleteProduct: deleteProductHandler,
        productCartCount: howManyItemInCart(),
        isAdded: isAdded,
        pending: pending,
        products: products,
        totalArticles: totalProductsHandler,
        incrementProduct: incrementProductNumber,
        decrementProduct: decrementProductNumber,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductsContextProvider;
