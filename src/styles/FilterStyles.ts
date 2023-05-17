import styled from 'styled-components'

const ParentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D1D1D1;
    height: 100vh;
    @media (max-width: 768px) {
        height: 200vh;
    }
`
const ChildContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 2rem;
    justify-content: center;
    height: 100vh;
    padding: 3rem;
    width: 1400px;
   @media (max-width: 768px) {
        flex-direction: column;
        height: 200vh;
    }
`
const LeftDiv = styled.div`
     display: flex;
     flex-direction: column;
     height: 60vh;
     flex : 1;
     background-color: aliceblue;
     box-shadow: 5px 10px 23px -10px rgba(0,0,0,0.1);
`
const RightDiv = styled.div`
    height : 80vh;
    /* background-color: brown; */
    flex : 3;
`
const TitleSection = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.4em;
    justify-content: space-between;
    padding: 1rem;
    background-color: white;
    font-family: sans-serif;
    font-weight: 500;
`
const HorizontalLine = styled.hr`
    height: 0.1px;
    background-color: #E4E4E7;
    opacity: 0.4;
`
const FilterBySection = styled.div`
    flex : 1;
`
const SectionTitle = styled.h3`
    font-size: 1em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color: #404040;
    padding: 1.2rem;
`
const OptionsContainer = styled.div`
    display: flex;
    padding-inline: 1rem;
    flex-direction: column;
    gap: 5px;
    height: 120px;
    font-size: 0.9em;
    font-family: sans-serif;
    font-weight: 500;
`

export {OptionsContainer,SectionTitle,HorizontalLine,FilterBySection,TitleSection,ParentContainer,ChildContainer,LeftDiv,RightDiv}