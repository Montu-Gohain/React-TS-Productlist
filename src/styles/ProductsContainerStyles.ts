import {styled} from 'styled-components'


const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 40px;
    padding: 8px 9px 8px 2px;
`
const Products_Container = styled.div`
  display: grid;
  padding: 2rem;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`

export {Products_Container,TopSection};