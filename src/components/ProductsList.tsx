import { useEffect, useState } from "react";
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
  const [chosenProduct, setChosenProduct] = useState(products);
  const [chosenCategories, setChosenCategories] = useState<string[]>([
    "phones",
  ]);

  //* Product sorting happening when sortmethod changes.

  const handleSortMethod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) return;
    if (event.target.value === "1") {
      console.log("Sort Price High to low");
      const temp_products = [...chosenProduct].sort(
        (a, b) => b.price - a.price
      );
      setChosenProduct(temp_products);
    } else if (event.target.value === "2") {
      const temp_products = [...chosenProduct].sort(
        (a, b) => a.price - b.price
      );
      setChosenProduct(temp_products);
      console.log("Sort Price Low to high");
    }
  };

  //* Product filtering based on categories
  const handleFilterSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (event.target.checked) {
      if (chosenCategories.length < 2) {
        console.log("I am here");
        const remove_empty = chosenCategories.concat(newValue);
        remove_empty.shift();
        console.log("After removal", remove_empty);
        setChosenCategories(remove_empty);
        console.log(chosenCategories);
      } else {
        console.log("You want to see ", newValue);
        setChosenCategories([newValue]);
        console.log("Your selected fields are : ", chosenCategories);
      }
    } else {
      console.log("You unchecked : ", newValue);
    }
  };

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
                <input
                  type="checkbox"
                  name="category"
                  value="computer"
                  onChange={(event) => handleFilterSelected(event)}
                />
                Computers
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="phone"
                  onChange={(event) => handleFilterSelected(event)}
                />
                Phones
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="shoe"
                  onChange={(event) => handleFilterSelected(event)}
                />
                Shoes
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="tshirt"
                  onChange={(event) => handleFilterSelected(event)}
                />
                T-shirts
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="guitar"
                  onChange={(event) => handleFilterSelected(event)}
                />
                Guitars
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
            <select onChange={(event) => handleSortMethod(event)}>
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
