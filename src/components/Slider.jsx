import { slideItems } from "../data";
import React, { useState }  from "react";
import styled from "styled-components";


// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 margin: 0;
 background-color: #FF0075;
 position: relative;
 display: flex;
 overflow: hidden;
`
const Arrow1 = styled.div`
width: 40px;
height: 40px;
background-color: black;
clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
position: absolute;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
top: 0;
bottom: 0;
left: 1%;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
const Arrow2 = styled.div`
margin: auto;
width: 40px;
height: 40px;
background-color: black;
clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0;
bottom: 0;
right: 1%;
cursor: pointer;
opacity: 0.2;
`
const Wrapper = styled.div`
margin: 0;
height:100%;
display:flex;
transition: all 0.6s ease;
transform: translateX(${props=> props.slideIn* -100}vw);
`

const Slidebar = styled.div`
width:100vw;
height:100vh;
display: flex;
`
const ImageContainer = styled.div`
flex: 1;
height: 100%;
width:100%;`
const Image = styled.img`

height:100%;`

const Info = styled.div`
flex: 1;
width:1000px;
height:100%;
/* clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%); */
background-color: #FF0075;

right:0;

display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column`

const Title = styled.h1`
color: white;
text-align:center;
margin-top:20%;
`

const Desc = styled.p`
width: 40%;
margin: 10%;
text-align: center;
color:white;
font-size:1rem;`

const Buy= styled.button`
background-color: transparent;
width:80px;
color: white;
border: 1px solid white;
height:40px;`


const Slider = () => {

    const [slideIn, setIn] = useState(0)

     const handleclick= (direction)=>{
      if(direction==='left'){

        setIn(slideIn>0? slideIn-1: 2);
      }else{
        setIn(slideIn<2? slideIn + 1 : 0 );
      }
    }; 
    
    
    



  return (
    <Container>
     <Arrow1 onClick={()=>handleclick("left")}>
     </Arrow1>
     <Wrapper slideIn={slideIn}>
     {slideItems.map((item)=>(
       <Slidebar>
       <ImageContainer>
       <Image src={item.img}/>
       </ImageContainer>
       <Info>
        <Title>{item.title}</Title>
        <Desc>{item.description}</Desc>
        <Buy>Buy now</Buy>
       </Info>
       </Slidebar>))}
     </Wrapper>
     <Arrow2 onClick={()=>handleclick("right")}>
     </Arrow2>

    </Container>
  );
};

export default Slider;
