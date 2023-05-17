import { Products_Container } from "../styles/ProductsContainerStyles";
import Product from "./Product";

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
  products: ProductDetails[];
}

const ProductContainer: React.FC<ProductDetailsProps> = ({ products }) => {
  return (
    <>
      <Products_Container>
        {products.map((product: ProductDetails) => (
          <Product details={product} key={product.id} />
        ))}
      </Products_Container>
    </>
  );
};
export default ProductContainer;
