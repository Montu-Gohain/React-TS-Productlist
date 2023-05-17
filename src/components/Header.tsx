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
  return (
    <HeaderContainer>
      <LeftDiv>
        <LogoContainer src={Amazom} alt="logo" />
        <SearchContainer>
          <SearchField placeholder="Search" />
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
