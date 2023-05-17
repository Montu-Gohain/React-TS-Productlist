import { useState, useEffect } from "react";
import { FaSlidersH } from "react-icons/fa";
import {
  ChildContainer,
  ParentContainer,
  LeftDiv,
  RightDiv,
  TitleSection,
  HorizontalLine,
  FilterBySection,
  SectionTitle,
  OptionsContainer,
} from "../styles/FilterStyles";
import { TopSection } from "../styles/ProductsContainerStyles";
import ProductContainer from "./ProductContainer";
import Data from "../data/dummydata.json";
const products = Data.products;

export default function ProductsList() {
  const [sortmethod, setSortmethod] = useState("");
  const [chosenProduct, setChosenProduct] = useState(products);

  // Product sorting happening when sortmethod changes.
  useEffect(() => {
    if (sortmethod === "1") {
      // console.log("Sort Price High to low");
      const temp_products = [...products].sort((a, b) => b.price - a.price);
      setChosenProduct(temp_products);
    } else if (sortmethod === "2") {
      const temp_products = [...products].sort((a, b) => a.price - b.price);
      setChosenProduct(temp_products);
      // console.log("Sort Price Low to high");
    }
  }, [sortmethod]);

  return (
    <ParentContainer>
      <ChildContainer>
        <LeftDiv>
          <TitleSection>
            Filter
            <FaSlidersH />
          </TitleSection>
          <HorizontalLine />
          <FilterBySection>
            <SectionTitle>Category</SectionTitle>
            <OptionsContainer>
              <label>
                <input type="checkbox" name="brand" value="Nike" />
                Nike
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Adidas
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Tommy Filfiger
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Asics
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Beneton
              </label>
            </OptionsContainer>
          </FilterBySection>
          <HorizontalLine />
          <FilterBySection>
            <SectionTitle>Brand</SectionTitle>
            <OptionsContainer>
              <label>
                <input type="checkbox" name="brand" value="Nike" />
                Nike
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Adidas
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Tommy Filfiger
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Asics
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                Beneton
              </label>
            </OptionsContainer>
          </FilterBySection>
          <HorizontalLine />
          <FilterBySection>
            <SectionTitle>Price</SectionTitle>
            <OptionsContainer>
              <label>
                <input type="checkbox" name="brand" value="Nike" />
                &lt; ₹100
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                ₹100 - ₹199
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                ₹200 - ₹599
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                ₹600 - ₹999
              </label>
              <label>
                <input type="checkbox" name="brand" value="Adidas" />
                &gt; ₹1000
              </label>
            </OptionsContainer>
          </FilterBySection>
        </LeftDiv>
        <RightDiv>
          <TopSection>
            <select onChange={(e) => setSortmethod(e.target.value)}>
              <option value="">Sort By</option>
              <option value="1">Price High to Low</option>
              <option value="2">Price Low to High</option>
            </select>
          </TopSection>
          <ProductContainer products={chosenProduct} />
        </RightDiv>
      </ChildContainer>
    </ParentContainer>
  );
}
