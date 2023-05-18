import { useState } from "react";
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
const chosenCategories = [""];
const chosenBrand = [""];

export default function ProductsList() {
  const [chosenProduct, setChosenProduct] = useState(products);

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
  const handleFilterCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (chosenCategories.length < 2 && chosenBrand.length < 2)
      setChosenProduct(products);
    const newValue = event.target.value;
    if (event.target.checked) {
      chosenCategories.push(newValue);
      const temp_filtered = products.filter((product) =>
        chosenCategories.includes(product.category)
      );
      setChosenProduct(temp_filtered);
    } else {
      //If user uncheckes a field we'll remove that category from the array.
      console.log("I got unchecked");
      const idx = chosenCategories.indexOf(newValue);
      chosenCategories.splice(idx, 1);
      const temp_filtered = chosenProduct.filter((product) =>
        chosenCategories.includes(product.category)
      );
      setChosenProduct(temp_filtered);
    }
    console.log("Currently selected catagories : ", chosenCategories);
  };

  //* Product filtering based on Brands

  const handleFilterBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (chosenBrand.length < 2 && chosenCategories.length < 2)
      setChosenProduct(products);
    const newValue = event.target.value;
    if (event.target.checked) {
      chosenBrand.push(newValue);
      const temp_filtered = products.filter((product) =>
        chosenBrand.includes(product.brand)
      );
      setChosenProduct(temp_filtered);
    } else {
      //If user uncheckes a field we'll remove that category from the array.
      console.log("I got unchecked");
      const idx = chosenBrand.indexOf(newValue);
      chosenBrand.splice(idx, 1);
      const temp_filtered = products.filter((product) =>
        chosenBrand.includes(product.brand)
      );
      setChosenProduct(temp_filtered);
    }
    console.log("Currently selected catagories : ", chosenBrand);
  };
  // * Reset all applied fiters
  const clearFilters = () => {
    const All_Checkbox = document.querySelectorAll('input[type="checkbox"]');
    All_Checkbox.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
    setChosenProduct(products);
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
                  onChange={(event) => handleFilterCategory(event)}
                />
                Computers
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="phone"
                  onChange={(event) => handleFilterCategory(event)}
                />
                Phones
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="shoe"
                  onChange={(event) => handleFilterCategory(event)}
                />
                Shoes
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="tshirt"
                  onChange={(event) => handleFilterCategory(event)}
                />
                T-shirts
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="guitar"
                  onChange={(event) => handleFilterCategory(event)}
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
                <input
                  type="checkbox"
                  name="brand"
                  value="Apple"
                  onChange={(event) => handleFilterBrand(event)}
                />
                Apple
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Samsung"
                  onChange={(event) => handleFilterBrand(event)}
                />
                Samsung
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Adidas"
                  onChange={(event) => handleFilterBrand(event)}
                />
                Tommy Filfiger
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Adidas"
                  onChange={(event) => handleFilterBrand(event)}
                />
                Asics
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Adidas"
                  onChange={(event) => handleFilterBrand(event)}
                />
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
            <button className="clear-button" onClick={clearFilters}>
              <strong>Clear all</strong>
            </button>
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
