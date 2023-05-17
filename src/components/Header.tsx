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

export default function Header() {
  // ^ Applying throttling
  const handleSearchBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Want are searching : ", event.target.value);
  };
  return (
    <HeaderContainer>
      <LeftDiv>
        <LogoContainer src={Amazom} alt="logo" />
        <SearchContainer>
          <SearchField
            placeholder="Search"
            onChange={(event) => handleSearchBox(event)}
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
  );
}
