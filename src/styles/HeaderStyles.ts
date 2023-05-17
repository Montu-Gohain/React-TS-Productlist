import styled from "styled-components";

const HeaderContainer = styled.div`
 background-color: azure;
 display: flex;
 box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
 @media (min-width: 768px) {
    padding: 5px 80px 5px 80px;
 }
`
const RightDiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex: 1;
`
const LeftDiv = styled.div`
margin-right: 2rem;
display: flex;
align-items: center;
justify-content: space-evenly;
flex: 1;
`
const LogoContainer = styled.img`
  height: 50px;
  width: 100px;
  @media (max-width: 768px) {
    scale: 0.6;
}
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #D1D1D1;
    border-radius: 8px;
    @media (max-width: 768px){
      border: none;
    }
`

const SearchField = styled.input`
    width: 340px;
    height: 40px;
    padding: 6px;
    border: none;
    font-size: medium;
    border-radius: 6px;
    @media (max-width: 768px) {
      width: 120px;
      margin-left: 4px;
      height: 30px;
      font-size: small;
   }
`
const SearchButton = styled.button`
    border: none;
    font-size: medium;
    color: #6A6A6A;
    padding-inline: 8px;
    background-color: transparent;
`

const CollectionComponent = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 112px;
    font-weight: 500;
    font-size: large;
    margin-right: 2.6rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media (max-width: 768px) {
     display: none;
     margin-right: 0;
  }
`
const NotifyComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: x-large;
    height: 40px;
    width: 30px;
    color: #6A6A6A;
    @media (max-width: 768px) {
      margin-left: -28px;
    }
`
const GreenLight = styled.p`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 15px;
    width: 15px;
    background-color: #22C55E;
    border-radius: 50%;
`
const UserProfile = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    margin-left: 1.5rem;
    background-color: #D1D1D1;
    border-radius:50%;
    @media (max-width: 768px) {
      width: 35px;
    }
`
export { HeaderContainer,SearchButton,RightDiv,LogoContainer,LeftDiv,SearchField,SearchContainer
,CollectionComponent,NotifyComponent,GreenLight,UserProfile
};