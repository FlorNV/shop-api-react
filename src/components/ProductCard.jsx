import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { formatCurrency } from "../utils/format";

export const ProductCard = ({ product }) => {
  const { id, title, images, price } = product;
  const [first] = images;
  const formattedPrice = formatCurrency(price);

  return (
    <div className="h-80 rounded-md bg-white shadow-sm transition-shadow duration-200 hover:shadow-xl cursor-pointer relative group">
      <div className="opacity-0 transition-all duration-200 group-hover:opacity-100 hover:text-rose-500 absolute top-2 right-2 z-20 p-2 bg-gray-100/75 rounded-full">
        <FaRegHeart />
      </div>
      <Link to={`/${id}`} className="h-full w-full absolute z-10" />
      <img
        src={first}
        alt={title}
        className="h-2/3 border-b mx-auto object-contain"
      />
      <div className="h-1/3 p-4 flex flex-col justify-center">
        <p className="text-xl font-semibold">{formattedPrice}</p>
        <h3 className="text-sm truncate">{title}</h3>
      </div>
    </div>
  );
};
