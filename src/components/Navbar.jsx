import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';

const Container = styled.div`
  height: 12vh;
  width: 100vw;
  background-color: #FF0075;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Subsec = styled.div`
  width: 33.33%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: ${props=>props.id==="one"?'center':props.id==="two"?'center':'center'};
  align-items: center;
`;
const Logo = styled.h1`
  cursor: pointer;
`;
const Contact =styled.h2`
display: flex;
align-items: center;
font-size: 0.5rem;
margin: 1%;
  `

const InputDiv = styled.div`
display:flex;
width: 50%;
justify-content: center;
align-items: center;
height: 50%;

background-color: #FFC0D3;
`
const Searchin=styled.input`
border: none;
background: transparent;
width: 85%;
height: 90%;
`
const Buynow = styled.button`
height:50%;
background-color: #FFC0D3;
border:none;
cursor: pointer;
color: #524A4E;
&:hover{
  background-color: black;
  color: white;
  transition: all 0.5s ease;
}
`
const Menu = styled.h4`
cursor:pointer;
margin: 2%;
&:hover{
  color: black;
  font-size: 1rem;
  transition: all 0.5s ease;
}`
const Navbar = () => {
  return (
    <Container>

      <Subsec id="one">
        <LanguageIcon/>
        <Contact><CallIcon/> 900-222-342-212</Contact>
        <InputDiv>
        <Searchin placeholder="Search here"/>
        <SearchIcon/>
        </InputDiv>
      </Subsec>

      <Subsec><Logo>YOGA.rt</Logo></Subsec>

      <Subsec id="two">
        <Menu>Magazine</Menu>
        <Menu>Stories</Menu>
        <Menu>Gallery</Menu>
        <Menu>Subscribe</Menu>
        <Buynow>Buy Now</Buynow>
      </Subsec>
    </Container>
  );
};

export default Navbar;
