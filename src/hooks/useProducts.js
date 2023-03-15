import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { products, isLoading };
};
