import { Cart } from "../data/product";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

export type ProductState = {
  isAdded: boolean | false;
};

export type ProductContextType = {
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  totalArticles: () => number;
  incrementProduct: (id: number) => void;
  decrementProduct: (id: number) => void;
  products: Cart<Product, number>[];
  productCartCount: number | 0;
  isAdded: boolean;
  pending: boolean;
};
