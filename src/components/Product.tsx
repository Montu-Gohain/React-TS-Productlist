import { ProductCard } from "../styles/ProductCardStyles";
import ProductRating from "./ProductRating";
import { AiFillHeart } from "react-icons/ai";

interface ProductDetails {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  img: string;
  ratings: number;
  ratings_count: number;
}
interface ProductDetailsProps {
  details: ProductDetails;
}
const Product: React.FC<ProductDetailsProps> = ({ details }) => {
  return (
    <ProductCard>
      <div className="wishlist">
        <AiFillHeart />
      </div>
      <img className="product-image" src={details.img} alt="product image" />
      <div className="product-details">
        <h3>{details.name}</h3>
        <h5>{details.category}</h5>
        <span>
          <ProductRating rating={details.ratings} /> ({details.ratings_count})
        </span>
        <h2>₹ {details.price}</h2>
      </div>
    </ProductCard>
  );
};
export default Product;
