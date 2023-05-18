import { useState, useContext, useEffect } from "react";
import { FaSlidersH, FaStethoscope } from "react-icons/fa";
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
const priceRanges: any = {
  1: [100, 500],
  2: [500, 1000],
  3: [1000, 1500],
  4: [2000, 2500],
  5: [2500, 3000],
};
const chosen_price_range: any = [];

// *-------------------------------------------

export default function ProductsList({
  data,
  setter,
}: {
  data: any;
  setter: any;
}) {
  // const [chosenProduct, setChosenProduct] = useState(products);
  // * Filter By Search Input(Product Name)

  //* Product sorting happening when sortmethod changes.

  const handleSortMethod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) return;
    if (event.target.value === "1") {
      console.log("Sort Price High to low");
      const temp_products = [...data].sort((a, b) => b.price - a.price);
      setter(temp_products);
    } else if (event.target.value === "2") {
      const temp_products = [...data].sort((a, b) => a.price - b.price);
      setter(temp_products);
      console.log("Sort Price Low to high");
    }
  };

  //* Product filtering based on categories
  const handleFilterCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (chosenCategories.length < 2 && chosenBrand.length < 2) setter(products);
    const newValue = event.target.value;
    if (event.target.checked) {
      chosenCategories.push(newValue);
      const temp_filtered = products.filter((product) =>
        chosenCategories.includes(product.category)
      );
      setter(temp_filtered);
    } else {
      //If user uncheckes a field we'll remove that category from the array.
      console.log("I got unchecked");
      const idx = chosenCategories.indexOf(newValue);
      chosenCategories.splice(idx, 1);
      const temp_filtered = data.filter((product: any) =>
        chosenCategories.includes(product.category)
      );
      setter(temp_filtered);
    }
    console.log("Currently selected catagories : ", chosenCategories);
  };

  //* Product filtering based on Brands

  const handleFilterBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (chosenBrand.length < 2 && chosenCategories.length < 2) setter(products);
    const newValue = event.target.value;
    if (event.target.checked) {
      chosenBrand.push(newValue);
      const temp_filtered = products.filter((product) =>
        chosenBrand.includes(product.brand)
      );
      setter(temp_filtered);
    } else {
      //If user uncheckes a field we'll remove that category from the array.
      console.log("I got unchecked");
      const idx = chosenBrand.indexOf(newValue);
      chosenBrand.splice(idx, 1);
      const temp_filtered = products.filter((product) =>
        chosenBrand.includes(product.brand)
      );
      setter(temp_filtered);
    }
    console.log("Currently selected catagories : ", chosenBrand);
  };
  // * Reset all applied fiters
  const clearFilters = () => {
    const All_Checkbox = document.querySelectorAll('input[type="checkbox"]');
    All_Checkbox.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
    setter(products);
  };

  // * Filter According to price ranger
  function FilterWPrice() {
    const min_ = chosen_price_range[0][0];
    const max_ = chosen_price_range[chosen_price_range.length - 1][1];
    const temp_products = data.filter(
      (item: any) => item.price >= min_ && item.price <= max_
    );
    setter(temp_products);
  }
  const FilterByPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const chosen_option = priceRanges[event.target.value];
    const new_range = [chosen_option[0], chosen_option[1]];
    if (event.target.checked) {
      chosen_price_range.push(new_range);
      FilterWPrice();
    } else {
      console.log("I got unchecked");
      const idx = chosen_price_range.indexOf(new_range);
      chosen_price_range.splice(idx, 1);
      console.log("Current", chosen_price_range.length);
      !chosen_price_range.length ? setter(products) : FilterWPrice();
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
                <input
                  type="checkbox"
                  name="brand"
                  value="1"
                  onChange={(event) => FilterByPrice(event)}
                />
                &lt; ₹100
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="2"
                  onChange={(event) => FilterByPrice(event)}
                />
                ₹100 - ₹199
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="3"
                  onChange={(event) => FilterByPrice(event)}
                />
                ₹200 - ₹599
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="4"
                  onChange={(event) => FilterByPrice(event)}
                />
                ₹600 - ₹999
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="5"
                  onChange={(event) => FilterByPrice(event)}
                />
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
          <ProductContainer products={data} />
        </RightDiv>
      </ChildContainer>
    </ParentContainer>
  );
}
