import Divider from "../Divider";
import ProductCard from "./ProductCard";
import { products } from "@/src/lib/data/product";

export default async function ProductsGrid() {
  return (
    <div>
      <p className="text-[1.2rem]"> {`${products.length} product`} </p>
      <Divider padding="pt-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
