import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

export default function App() {
  // const [chosenProduct, setChosenProduct] = useState(products);
  // const [chosenCategories, setChosenCategories] = useState<string[]>([
  //   "phones",
  // ]);
  return (
    <>
      <Header />
      <ProductsList />
    </>
  );
}
