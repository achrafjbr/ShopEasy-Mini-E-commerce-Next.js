"use server";

import { revalidatePath } from "next/cache";
import { products, shoppingCart } from "../lib/data/product";
import { Product, ProductState } from "../lib/types/product";

export const addToPanier = async (
  prevState: ProductState,
  product: Product,
): Promise<ProductState> => {
  console.log("Products", product);
  shoppingCart.push(product);
  return { isAdded: true };
  //revalidatePath("/cart");
};

export const getProducts = async () => products;

export const productNumber = async () => shoppingCart.length;

export const removeFromPanier = async () => {};

export const incrementProductNumber = async (id: number) => {};

export const decrementProductNumber = async (id: number) => {};

export const getProductById = async (id: number) => {
  return products.find((product) => product.id == id);
};
