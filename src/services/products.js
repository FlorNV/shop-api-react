const PRODUCTS_ENDPOINT_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const res = await fetch(PRODUCTS_ENDPOINT_URL);
  const json = await res.json();
  const { products } = json;
  return products;
};
