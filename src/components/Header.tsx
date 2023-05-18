import {
  HeaderContainer,
  RightDiv,
  LeftDiv,
  LogoContainer,
  SearchField,
  SearchButton,
  SearchContainer,
  CollectionComponent,
  NotifyComponent,
  GreenLight,
  UserProfile,
} from "../styles/HeaderStyles";
import Amazom from "../assets/amazon.svg";
import { FaSearch, FaList, FaBell } from "react-icons/fa";
import UserIcon from "../assets/mesmall.webp";
import { useState } from "react";
import ProductsList from "./ProductsList";
import Data from "../data/dummydata.json";
const products = Data.products;

export default function Header() {
  const [chosenProduct, setChosenProduct] = useState(products);

  function SearchByNamee(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    if (!input.length) {
      setChosenProduct(products);
    } else {
      const temp_ = chosenProduct.filter((item) =>
        item.name.toLocaleLowerCase().includes(input.toLowerCase())
      );
      setChosenProduct(temp_);
    }
  }

  return (
    <>
      <HeaderContainer>
        <LeftDiv>
          <LogoContainer src={Amazom} alt="logo" />
          <SearchContainer>
            <SearchField
              placeholder="Search"
              onChange={(event) => SearchByNamee(event)}
            />
            <SearchButton>
              <FaSearch />
            </SearchButton>
          </SearchContainer>
        </LeftDiv>
        <RightDiv>
          <CollectionComponent>
            <FaList />
            Categories
          </CollectionComponent>
          <NotifyComponent>
            <FaBell />
            <GreenLight />
          </NotifyComponent>
          <UserProfile src={UserIcon} />
        </RightDiv>
      </HeaderContainer>
      <ProductsList data={chosenProduct} setter={setChosenProduct} />
    </>
  );
}
