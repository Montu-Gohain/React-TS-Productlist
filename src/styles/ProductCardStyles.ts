import {styled} from 'styled-components'

const ProductCard = styled.div`
    background-color: #ECFDF5;
    width: 270px;
    height: 285px;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    position: relative;
    transition: box-shadow 200ms ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`
export {ProductCard}