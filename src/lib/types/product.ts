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
  getProducts: () => Promise<Product[]>;
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  totalArticles: () => number;
  products: Product[];
  productCartCount: number | 0;
  isAdded: boolean;
  pending: boolean;
};
