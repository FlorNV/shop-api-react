import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";

export const ProductCards = () => {
  const { products, isLoading } = useProducts();

  return (
    <div className="md:w-4/5 2xl:w-3/5 mx-auto my-6">
      <div className="mx-4 sm:mx-10 md:mx-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};
